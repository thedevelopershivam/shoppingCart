import { useState, useRef } from 'react';
import { ImCross } from "react-icons/im";

function OtpForm({ display = "flex", setDisplayLoginPopup }) {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        // Move focus to the next input box
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text').slice(0, 6);
        const newOtp = [...otp];
        for (let i = 0; i < paste.length; i++) {
            newOtp[i] = paste[i];
            if (inputRefs.current[i]) {
                inputRefs.current[i].value = paste[i];
            }
        }
        setOtp(newOtp);
        inputRefs.current[paste.length - 1].focus();
    };

    return (
        <div className={`fixed top-0 left-0 h-full w-full justify-center bg-bgPrimary border-3 border-transparent backdrop-blur-md z-999999 p-6 overflow-y-auto vs ${display} `}>
            <div
                className="absolute top-2 right-2 centerMe w-[40px] h-[40px] rounded-full bg-gray-300 cursor-pointer duration-300 hover:bg-transparent hover:text-white"
                onClick={setDisplayLoginPopup}>
                <ImCross />
            </div>
            <section className="flex flex-col max-w-[500px] w-[calc(100%-20px)] max-h-[400px] m-auto">
                <div className="w-full bg-white px-5 pt-2 pb-5 shadow-lg rounded m-auto">
                    <form className="flex flex-col w-full gap-4">
                        <h4 className="text-textPrimary text-2xl text-center font-semibold">Enter OTP</h4>
                        <span className="text-red-500">
                            This otp is valid only for 5 minutes
                        </span>
                        <span className="text-textPrimary">
                            Kindly check your email id we just sent you an OTP
                        </span>

                        <div className="flex justify-center gap-2">
                            {otp.map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-10 h-10 text-center text-lg border border-gray-300 rounded"
                                    onChange={(e) => handleChange(e, index)}
                                    onPaste={handlePaste}
                                />
                            ))}
                        </div>
                        <div className="centerMe">
                            <button type="submit" className="bg-bgPrimary rounded px-8 py-2 text-white">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default OtpForm;
