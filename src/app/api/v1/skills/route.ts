
import APIResponseHandler from "@/Helpers/ApiResponseHandler"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const data = [{
    "id": 1,
    "user": "user_id here",
    "title": "MERN Stack Developer",
    "description": "Description here",
    "image": "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1742654828~exp=1742658428~hmac=5acdb20208b92a52225e996c93904b748ef25490a32a5618bbff391bb5d642a4&w=826",
    "sub_skills": "sub_skills_id here"
  }];

  return APIResponseHandler.HTTP_200_OK(data, "Skill fetched successfully.")
}