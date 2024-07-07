"use client";
import LabelInput from "../../components/common/LabelInput";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import axiosInstance from "@/app/util/axiosWithoutLogin";
import { useState } from "react";
import OtpForm from "../../components/common/forms/OtpForm";
import Link from "next/link";

// bg-[rgba(255,255,255,.01)]
function Signup({ display = "flex", formSwitcher, setDisplayLoginPopup, res }) {
  const [formData, setFormData] = useState();
  const [error, setError] = useState();
  const [formError, setFormError] = useState();
  const [showOtp, setShowOtp] = useState(false);

  const signupSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (
      formData?.username &&
      formData?.email &&
      formData?.mobile &&
      formData?.password
    ) {
      try {
        const saveData = await axiosInstance.post("/user-create", formData);
        if (saveData?.status === 201) {
          setShowOtp(true);
        }
      } catch (err) {
        setFormError(err?.response?.data?.error);
        setError("Failed to create account. Please try again.");
      } finally {
        console.log("signup successful");
      }
    } else {
      setError("all the fields are mandatory!");
    }
  };

  return !showOtp ? (
    <div
      className={`fixed py-10 top-0 left-0 h-full w-full justify-center bg-bgPrimary border-3 border-transparent backdrop-blur-md z-999999 p-6 overflow-y-auto vs ${display} `}
    >
      {/* <div
        className="absolute top-2 right-2 centerMe w-[40px] h-[40px] rounded-full bg-gray-300 cursor-pointer duration-300 hover:bg-transparent hover:text-white"
        onClick={setDisplayLoginPopup}
      >
        <ImCross />
      </div> */}

      <section
        className={`flex flex-col max-w-[500px] w-[calc(100%-20px)] ${
          error ? "h-[555px]" : "h-[500px]"
        } m-auto `}
      >
        <div
          className={`w-full bg-white px-5 pt-2 pb-5 shadow-lg rounded m-auto ${
            error ? "h-[520px]" : "h-[510px]"
          } m-auto`}
        >
          <form className="flex flex-col w-full gap-4">
            <h4 className="text-textPrimary text-2xl text-center font-semibold ">
              Create Account
            </h4>
            {error && <span className=" text-red-500">{error}</span>}
            <LabelInput
              label="Username"
              placeholder="Username"
              attr={{ required: true }}
              onChange={(e) => setFormData({ ...formData, username: e })}
            />
            <LabelInput
              label="Mobile"
              type="number"
              placeholder="mobile number"
              attr={{ length: 10, required: true }}
              onChange={(e) => setFormData({ ...formData, mobile: e })}
            />
            <LabelInput
              label="email"
              type="email"
              placeholder="xyz@gmail.com"
              attr={{ required: true }}
              onChange={(e) => setFormData({ ...formData, email: e })}
            />
            <LabelInput
              label="password"
              type="password"
              placeholder="password"
              attr={{ required: true }}
              onChange={(e) => setFormData({ ...formData, password: e })}
            />
            <div className="centerMe">
              <button
                type="button"
                className="bg-bgPrimary rounded px-8 py-2 text-white"
                onClick={signupSubmit}
              >
                Submit
              </button>
            </div>

            <section className="centerMe flex-col gap-4">
              <span> Sign up with: </span>
              <section className="flex gap-5">
                <div className="w-[40px] h-[40px] centerMe rounded-full bg-gray-200 cursor-pointer hover:bg-transparent hover:text-red-600 hover:scale-[1.1] duration-300 ">
                  <SiGmail size={20} />
                </div>
                <div className="w-[40px] h-[40px] centerMe rounded-full bg-gray-200 cursor-pointer hover:bg-transparent hover:text-blue-600 hover:scale-[1.1] duration-300 ">
                  <FaFacebookF size={20} />
                </div>
              </section>
            </section>
          </form>
        </div>

        <span className="flex gap-1 text-white ml-auto px-1">
          <span> If you already have account </span>
          <Link href={"/login"}>
            <span
              className="text-blue-300 font-semibold cursor-pointer hover:text-blue-500"
              // onClick={() => formSwitcher()}
            >
              Login Here{" "}
            </span>
          </Link>
        </span>
      </section>
    </div>
  ) : (
    <OtpForm />
  );
}

export default Signup;
