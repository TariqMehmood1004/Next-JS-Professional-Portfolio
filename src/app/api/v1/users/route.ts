
import APIResponseHandler from "@/Helpers/ApiResponseHandler"
import { NextResponse, NextRequest } from "next/server"

export function GET(request: NextRequest, response: NextResponse) {
  const users = [
    {
    "id": 1,
    "first_name": "Tariq",
    "last_name": "Mehmood",
    "email": 'email@gmail.com',
    "username": "tariqmehmood_1004",
    "slug": "portfolio.com/@tariq-mehmood",        // portfolio.com/@tariq-mehmood
    "profession": "Senior software engineer",
    "password": "password123",
    "otp": 123456, // expires in 5 minutes
    "otp_expires_at": "2023-01-01 00:00:00",
    "is_verified": false,
    "is_active": true,
    "is_deleted": false,
    "is_banned": false,
    "is_online": true,
    "is_available": true,
    "image": "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1742654828~exp=1742658428~hmac=5acdb20208b92a52225e996c93904b748ef25490a32a5618bbff391bb5d642a4&w=826",
    "social_media_links": "social_media_id here",
    "skills": "skills_id here",
    "sub_skills": "sub_skills_id here",
    "experiences": "experiences_id here",
    "education": "education_id here",
    "created_at": "2023-01-01",
    "updated_at": "2023-01-01",
  }];

  return APIResponseHandler.HTTP_200_OK(users, "User fetched successfully.")
}