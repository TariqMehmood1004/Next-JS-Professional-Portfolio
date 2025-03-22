
import APIResponseHandler from "@/Helpers/ApiResponseHandler"
import { NextResponse, NextRequest } from "next/server"

export function GET(request: NextRequest, response: NextResponse) {
  const data = [{
    "id": 1,
    "user": "user_id here",
    "title": "Senior software engineer",
    "company": "Company name here",
    "logo": "Logo here",
    "start_date": "2020-01-01",
    "end_date": "2023-01-01",
    "description": "Description here",
  }];

  return APIResponseHandler.HTTP_200_OK(data, "Experiences fetched successfully.")
}