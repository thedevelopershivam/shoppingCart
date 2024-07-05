import { NextResponse } from "next/server"
import axiosInstance from '@/app/util/axiosWithoutLogin';

export const POST = async (request) => {
    const data =  await request.json();
    const res =  await axiosInstance.post("/user-login", data);
    const response  = NextResponse.json({status: "success", data: res?.data});
    
    // {// // httpOnly: true, // // secure: true, // // sameSite: true // }
    response.cookies.set('token', res.data.token);
    return response;
}