
import APIResponseHandler from "@/Helpers/ApiResponseHandler";
import { NextRequest } from "next/server";
import User from "@/app/Schemas/UserSchema";
import { connectDatabase } from "@/config/db";
import sendEmail from "@/app/Utils/emailService";


// GET all the verified users
export async function GET(request: NextRequest) {

  try {
    // Check connection before querying
    await connectDatabase();

    const user = await User.findOne({ is_verified: true }).exec();

    if (!user) {
      console.log("❌ User not found!");
      return APIResponseHandler.HTTP_404_NOT_FOUND("User does not exist.");
    }

    console.log(`✅ User found: ${user.email}, Updating OTP...`);

    return APIResponseHandler.HTTP_201_CREATED(user, "Verified users fetched successfully.");
  } catch (error) {
    console.error("❌ Error updating user:", error);
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(`INTERNAL_SERVER_ERROR: ${error}`);
  }
}


// Update the Record with OTP
export async function POST(request: NextRequest) {

  // Check connection before querying
  await connectDatabase();

  const { email, otp } = await request.json();

  if (!email || !otp) {
    console.log("⚠️ Missing email or OTP!");
    return APIResponseHandler.HTTP_400_BAD_REQUEST("Both fields are required.");
  }

  console.log(`🔍 Searching for user: ${email}`);

  const user = await User.findOne({ email }).exec();

  if (!user) {
    console.log("❌ User not found!");
    return APIResponseHandler.HTTP_404_NOT_FOUND("User is already verified or does not exist.");
  }

  console.log(`✅ User found: ${user.email}, Updating OTP...`);

  try {
    user.otp = otp;
    user.is_verified = true;
    user.updated_at = new Date();

    await user.save();

    console.log("✅ OTP Updated & User Verified!");

    // Send email asynchronously (won't block request)
    sendEmail(user.email, "Your account has been successfully verified.")
      .catch((err) => console.error("❌ Email sending failed:", err));

    return APIResponseHandler.HTTP_201_CREATED(user, "User verified successfully.");
  } catch (error) {
    console.error("❌ Error updating user:", error);
    return APIResponseHandler.HTTP_500_INTERNAL_SERVER_ERROR(`INTERNAL_SERVER_ERROR: ${error}`);
  }
}
