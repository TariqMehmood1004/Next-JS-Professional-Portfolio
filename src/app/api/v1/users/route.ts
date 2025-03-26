
import APIResponseHandler from "@/Helpers/ApiResponseHandler";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcryptjs";
import User from "@/app/Schemas/UserSchema";
import generateOtp from "@/app/Utils/OtpGenerator";
import multer from "multer";
import fs from "fs";
import path from "path";
import { connectDatabase } from "@/config/db";
import slugify from "slugify";
import { sendOtpEmail } from "@/app/Utils/emailService";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(process.cwd(), 'uploads');

    // Ensure the directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// GET Records
export async function GET(request: NextRequest, response: NextResponse): Promise<NextResponse> {
  await connectDatabase();

  try {
    const users = await User.find();
    return APIResponseHandler.HTTP_200_OK(users, "Users fetched successfully.");
  } catch (error) {
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(`INTERNAL_SERVER_ERROR: ${error}`);
  }
}

// POST Records
export async function POST(request: NextRequest): Promise<NextResponse> {
  await connectDatabase();

  const formData = await request.formData();

  const file = formData.get("image") as File; // Get the image file

  // Save the file to local storage
  const filePath = path.join(process.cwd(), "public/uploads", file.name);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(filePath, buffer);

  const firstName = formData.get("first_name") as string;
  const lastName = formData.get("last_name") as string;
  const slag = `${firstName}-${lastName}`;

  // Generate OTP
  const { otp, otpExpiresAt } = generateOtp();

  try {
    const newUser = new User({
      first_name: firstName,
      last_name: lastName,
      email: formData.get("email"),
      username: formData.get("username"),
      slug: slag.toLowerCase(),
      profession: formData.get("profession"),
      password: await hash(formData.get("password") as string, 10),
      otp: otp,
      otp_expires_at: otpExpiresAt,
      is_verified: formData.get("is_verified") || false,
      is_active: formData.get("is_active") || true,
      is_deleted: formData.get("is_deleted") || false,
      is_banned: formData.get("is_banned") || false,
      is_online: formData.get("is_online") || true,
      is_available: formData.get("is_available") || true,
      image: `/uploads/${file.name}`, // Store image URL
      social_media_links_id: formData.get("social_media_links_id") as string || null,
      skills_id: formData.get("skills_id") as string || null,
      sub_skills_id: formData.get("sub_skills_id") as string || null,
      experiences_id: formData.get("experiences_id") as string || null,
      education_id: formData.get("education_id") as string || null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    console.log("User is creating...");
    const savedUser = await newUser.save();

    // Send OTP email in the background (don't wait for it)
    sendOtpEmail(savedUser.email, otp.toString(), otpExpiresAt)
      .catch((err) => console.error("Email sending failed:", err));

    return APIResponseHandler.HTTP_201_CREATED(savedUser, "Verify the 6-digits one-time paasword that we sent to you.");
  } catch (error) {
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(`INTERNAL_SERVER_ERROR: ${error}`);
  }
}

