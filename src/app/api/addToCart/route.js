import axiosInstance from "@/app/util/axiosInstance";

const { NextResponse } = require("next/server")

export async function POST(data) {
    const response = await data.json();

    try {

        const userData = await axiosInstance.post("/add-cart", response);
        return NextResponse.json({ status: "done", data: userData?.data?.data })

    } catch (err) {

        console.log(err)
        return NextResponse.json({ status: "failed", error: rec })

    }
}
