
import APIResponseHandler from "@/Helpers/ApiResponseHandler"
import { NextResponse, NextRequest } from "next/server"

export default async function GET(request: NextRequest, response: NextResponse) {
  const data = [{
    "id": 1,
    "user": "user_id here",
    "title": "Master's in Computer Science",
    "logo": "Logo here",
    "organization": "Education name here",
    "start_date": "2020-01-01",
    "end_date": "2023-01-01",
    "description": "Description here"
  }];

  return APIResponseHandler.HTTP_200_OK(data, "Education fetched successfully.")
}