
import APIResponseHandler from "@/Helpers/ApiResponseHandler"
import { NextResponse, NextRequest } from "next/server"

export async function GET(request: NextRequest, response: NextResponse): Promise<NextResponse> {
  const links = [
    {
    "id": 1,
    "user": "user_id here",
    "title": "LinkedIn",
    "url": "https://www.linkedin.com/in/tariqmehmood_1004/"
    },
    {
      "id": 2,
      "user": "user_id here",
      "title": "GitHub",
      "url": "https://github.com/tariqmehmood_1004"
    },
  ];

  return APIResponseHandler.HTTP_200_OK(links, "Social media links fetched successfully.")
}