import { NextResponse } from "next/server"
import axiosInstance from '@/app/util/axiosWithoutLogin';

export const GET = async () => {
    const res =  await axiosInstance.get("/filter-data");
    return NextResponse.json({status: "success", data: res?.data});
}