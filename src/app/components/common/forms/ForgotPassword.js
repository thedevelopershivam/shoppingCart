import { useEffect, useState } from 'react';
import LabelInput from '../LabelInput';
import { ImCross } from "react-icons/im";
import axiosInstance from '@/app/util/axiosWithoutLogin';


// bg-[rgba(255,255,255,.01)]
function ForgotPassword({ display = "flex", formSwitcher, setDisplayLoginPopup, formType }) {

    const [showOtp, setShowOtp] = useState("forgot");
    const [formData, setFormData] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const submitForm = async (e) => {
        e.preventDefault();
        setError("");
        if (formData?.email) {
            try {
                const getRes = await axiosInstance.post("/forget-password", formData);
                
                if (getRes?.data?.status === "success") {
                    setShowOtp("otp");
                }

            } catch (err) {
                cosnole.log(err);
            }
        }
        else {
            setError("Pls provide valid email id!")
        }
    }

    const submitOtp = async (e) => {
        const setOtp = formData?.first + "" + formData?.second + "" + formData?.third + "" + formData?.fourth + "" + formData?.fifth + "" + formData?.sixth;
        e.preventDefault();

        if (setOtp) {
            try {
                const verified = await axiosInstance.post("/verify-otp",
                    { email: formData?.email, otp: setOtp })
                const status = verified?.data?.status;

                if (verified?.data?.status === "success") {
                    setShowOtp("new-password")
                }
            } catch (err) {
                console.log(err)
            }
        }
        else {
            setError("otp is mandatory! and fill all the blocks!");
        }

    }

    const submitUpdatePassword = async (e) => {
        const setOtp = formData?.first + "" + formData?.second + "" + formData?.third + "" + formData?.fourth + "" + formData?.fifth + "" + formData?.sixth;

        setFormData('');

        e.preventDefault();

        if (formData?.password === formData?.uPassword) {
            try {
                const passwordUpdate = await axiosInstance.post("/update-password", {
                    email: formData?.email,
                    otp: setOtp,
                    password: formData?.password
                });

                if (passwordUpdate?.data?.status === "success") {
                    setShowOtp("success")
                }

            } catch (err) {
                setError({ updateFormError: err?.response?.data?.message })
            }
        }
        else {
            setError("both password should be same!!")
        }
    }

    
    const Button = ({ onClick }) => {
        return <div className="centerMe mt-4">
            <button
                type="button"
                className="bg-bgPrimary rounded px-8 py-2 text-white"

                onClick={onClick}>
                Submit
            </button>
        </div>
    }


    function OtpInput({ onChange, value, index }) {
        return <input
            type="number"
            maxLength="1"
            value={value}
            className="hideSpinner w-10 h-10 text-center text-lg border border-gray-300 rounded text-black"
            onChange={onChange}
            tabIndex={index}
        />
    }



    // $2b$12$RZD4ueZ2nqTs1afUyAuSButtrsizG9Ri6n.8notr10KCBYN48TT3u

    return (
        <div className={`fixed flex top-0 left-0 h-full w-full justify-center bg-bgPrimary border-3 border-transparent backdrop-blur-md z-999999 p-6 overflow-y-auto vs ${display} `}>
            here
            <div
                className="absolute top-2 right-2 centerMe w-[40px] h-[40px] rounded-full bg-gray-300 cursor-pointer duration-300 hover:bg-transparent hover:text-white"
                onClick={setDisplayLoginPopup}>
                <ImCross />
            </div>

            <section className="flex flex-col max-w-[500px] w-[calc(100%-20px)] max-h-[400px] m-auto">

                <div className="w-full bg-white px-5 pt-2 pb-5 shadow-lg rounded m-auto">
                    {
                        showOtp === "forgot" &&
                        <form className="flex flex-col w-full gap-4">
                            <h4 className="text-textPrimary text-2xl text-center font-semibold ">
                                Forgot Password
                            </h4>

                            <LabelInput
                                label="email"
                                type="email"
                                placeholder="email id"
                                attr={{ required: true }}
                                onChange={(e) => setFormData({ ...formData, email: e })}
                            />


                            <Button onClick={submitForm} />
                        </form>
                    }


                    {
                        showOtp === "otp" &&
                        <form>
                            <div className='flex flex-col'>
                                <label className="text-center font-semibold">
                                    OTP
                                </label>

                                <span className="text-textPrimary text-sm text-red-500">
                                    Kindly check your email id we just sent you an OTP
                                    and this OTP is valid for 5 minutes only!
                                </span>

                                <div className="flex justify-center gap-4 mt-4">

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, first: e.target.value })}
                                        value={formData?.first}
                                        index={1}
                                    />

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, second: e.target.value })}
                                        value={formData?.second}
                                        index={2}
                                    />

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, third: e.target.value })}
                                        value={formData?.third}
                                        index={3}
                                    />

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, fourth: e.target.value })}
                                        value={formData?.fourth}
                                        index={4}
                                    />

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, fifth: e.target.value })}
                                        value={formData?.fifth}
                                        index={5}
                                    />

                                    <OtpInput
                                        onChange={(e) => setFormData({ ...formData, sixth: e.target.value })}
                                        value={formData?.sixth}
                                        index={6}
                                    />

                                </div>
                            </div>

                            <div
                                className="text-center text-blue-500 hover:text-blue-700 mt-3 cursor-pointer" onClick={() => setShowOtp('forgot')}>
                                Try another email id
                            </div>


                            <div className="centerMe mt-5">
                                <button type="button" className="bg-bgPrimary rounded px-8 py-2 text-white" onClick={submitOtp}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    }
                    {
                        showOtp === "new-password" &&
                        <form>
                            <h3 className="text-center text-2xl font-semibold text-textPrimary">
                                Update Password
                            </h3>

                            <div className='flex flex-col gap-4'>
                                <LabelInput
                                    label="Password"
                                    type="text"
                                    placeholder="Password"
                                    onChange={(e) => setFormData({ ...formData, password: e })}
                                />

                                <LabelInput
                                    label="Re-type Password"
                                    type="text"
                                    placeholder="Retype Password"
                                    onChange={(e) => setFormData({ ...formData, uPassword: e })}
                                />
                            </div>

                            <Button onClick={submitUpdatePassword} />

                            {
                                error?.updateFormError && error?.updateFormError === "pls try again time has been over" ? <div
                                    className="text-center text-blue-500 hover:text-blue-700 mt-3 cursor-pointer"
                                    onClick={() => setShowOtp('forgot')}>
                                    Pls retry 5 minutes has been over!
                                </div>
                                    : ''
                            }

                        </form>
                    }

                    {
                        showOtp === "success" &&
                        <div className="flex flex-col gap-2">

                            <span className='flex flex-col gap-3 text-gray-500 font-semibold text-2xl capitalize text-center'>
                                <span>Great Your Password updated successfuly!</span>
                                <span className="text-red-500 cursor-pointer" onClick={() => formSwitcher()}>
                                    Login Please
                                </span>

                            </span>
                        </div>
                    }


                </div>

                <span className=" flex gap-1 text-white ml-auto px-1">
                    <span> Go back to login form </span>
                    <span
                        className='text-blue-300 font-semibold cursor-pointer hover:text-blue-500'
                        onClick={() => formSwitcher()}>
                        Click Here
                    </span>
                </span>
            </section>
        </div>
    )
}

export default ForgotPassword



