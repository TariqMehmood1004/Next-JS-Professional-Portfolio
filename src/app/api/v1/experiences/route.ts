import APIResponseHandler from "@/Helpers/ApiResponseHandler";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const data = [
    {
      id: 1,
      user: "user_id here",
      title: "Senior Software Engineer",
      company: "Company name here",
      logo: "Logo here",
      start_date: "2020-01-01",
      end_date: "2023-01-01",
      description: "Description here",
    }
  ];

  return APIResponseHandler.HTTP_200_OK(data, "Experiences fetched successfully.");
}
