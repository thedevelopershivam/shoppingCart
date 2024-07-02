
import LabelInput from '../LabelInput'
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import {  useState } from "react";
import { ImSpinner } from "react-icons/im";
import { useLoggedInMutation } from '@/app/redux/query/UserLogin';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@/app/redux/slices/userSlice';
import { popUp } from '@/app/redux/slices/authPopUpSlice';





// bg-[rgba(255,255,255,.01)]
function LoginForm({ display, formSwitcher, setDisplayLoginPopup, forgotPassword }) {
const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const [checkFunction, checkResponse] = useLoggedInMutation();
  const [isLoading, setIsLoading] = useState(false);
  
  
  
  const formSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, error } = await checkFunction(formData);
      if(data?.status === "success")
      { 
        localStorage.setItem("token", data?.data?.token);
        const stringifyData = JSON.stringify(data?.data?.data);
        localStorage.setItem("data", stringifyData);
        dispatch(addUser(data?.data?.data))
        dispatch(addUser(data?.data?.data))
        dispatch(popUp(""))
        
      }

      

      setIsLoading(false);      
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className={`fixed top-0 left-0 h-full w-full justify-center bg-bgPrimary border-3 border-transparent backdrop-blur-md z-999999 p-6 overflow-y-auto vs ${display} `}>

      <div
        className="absolute top-2 right-2 centerMe w-[40px] h-[40px] rounded-full bg-gray-300 cursor-pointer duration-300 hover:bg-transparent hover:text-white"
        onClick={setDisplayLoginPopup}>
        <ImCross />
      </div>

      <section className="flex flex-col max-w-[500px] w-[calc(100%-20px)] max-h-[400px] m-auto">

        <div className="w-full bg-white px-5 pt-2 pb-5 shadow-lg rounded m-auto">
          <form className="flex flex-col w-full gap-4" >
            <h4 className="text-textPrimary text-2xl text-center font-semibold ">
              Login
            </h4>
            <LabelInput
              label="email"
              type="email"
              placeholder="mobile number"
              attr={{ required: true }}
              onChange={(e) => setFormData({ ...formData, email: e })}
            />
            <div className='flex flex-col'>
              <LabelInput
                label="password"
                type="password"
                placeholder="password"
                attr={{ required: true }}
                onChange={(e) => setFormData({ ...formData, password: e })}
              />

              <span className='ml-auto text-sm cursor-pointer text-red-500 hover:text-blue-500' onClick={forgotPassword}>
                Forgot Password
              </span>


            </div>

            <div className="centerMe">
          {
              !isLoading ?
              <button type="submit" className="bg-bgPrimary rounded px-8 py-2 text-white" onClick={formSubmit}>
                Submit
              </button>
              : 
              <button type="button" className="bg-bgPrimary rounded px-8 py-2 text-white">
                    <ImSpinner className="animate-spin"/>
              </button>
            }
            </div>

            <section className="centerMe flex-col gap-4">
              <span> Login with: </span>
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

        <span className=" flex gap-1 text-white ml-auto px-1">
          <span> If you dont have an account please </span>
          <span
            className='text-blue-300 font-semibold cursor-pointer hover:text-blue-500'
            onClick={() => formSwitcher()}>
            Signup Here
          </span>
        </span>

      </section>



    </div>
  )
}

export default LoginForm



