"use client";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/app/redux/slices/userSlice";
import { addCart } from "@/app/redux/slices/cartSlice";

import React, { useEffect, useState } from "react";
import LinkTag from "./LinkTag";
import { HiHome } from "react-icons/hi2";
import Link from "next/link";

import { PiShoppingCartSimpleLight, PiUserCircleLight } from "react-icons/pi";
import SearchBar from "./SearchBar";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Wrapper from "./Wrapper";
import Signup from "./forms/Signup";
import LoginForm from "./forms/LoginForm";
import ForgotPassword from "./forms/ForgotPassword";
import { popUp } from "@/app/redux/slices/authPopUpSlice";

function UserDropdownBtn({ href = "#", icon, title }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 duration-300 hover:pl-2 text-gray-600 font-normal "
    >
      {icon && <span> {icon} </span>}
      {title && <span> {title} </span>}
    </Link>
  );
}

function TopNavbar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state?.user?.user);
  const cart = useSelector((state) => state?.cart);
  const authModal = useSelector((state) => state?.popUp?.popUp);

    

    useEffect(() => {
        let data = localStorage.getItem("data");
        data = JSON.parse(data);

  //     let cartItems = localStorage.getItem("cart");
  //     cartItems = JSON.parse(cartItems);

  //     if (data) {
  //       dispatch(addUser(data));
  //     }
  //     if (cartItems?.length > 0) {
  //       dispatch(addCart(cartItems));
  //     }
  //   }, [dispatch]);

  return (
    <>
      <Wrapper className=" mx-auto w-full h-[calc(50px+1.5vw)] bg-bgPrimary flex justify-between items-center px-[calc(20px+2vw)] z9999">
        <div className="text-[25px]">Logo</div>

        <div>
          <SearchBar />
        </div>

        <div className="hidden sm:flex gap-8">
          {user && !user?.email && (
            <span
              className="font-semibold text-white cursor-pointer"
              onClick={() => dispatch(popUp("login"))}
            >
              Login
            </span>
          )}

          <LinkTag
            href={"#"}
            title="Cart"
            IconImg={<HiHome size={16} />}
            titleClass="hidden md:flex"
            dir={"rtl"}
            notificationCounting={20}
            dropdownClass={"w-[250px]"}
            icon={<PiShoppingCartSimpleLight className="relative" size={22} />}
          ></LinkTag>

          <LinkTag
            title="Shivam Mittal"
            IconImg={<HiHome size={16} />}
            titleClass="hidden md:flex"
            dir={"rtl"}
            dropdownClass={"w-[200px] px-3.5 py-2.5 gap-3.5"}
            icon={<PiUserCircleLight className="relative" size={22} />}
            className="after:[none]"
          >
            <UserDropdownBtn
              icon={<IoMdHeartEmpty size={20} />}
              title="Wishlist"
            />
            <UserDropdownBtn icon={<FaBoxArchive />} title="Order" />
            <UserDropdownBtn
              icon={<IoNotificationsOutline size={20} />}
              title="Notification"
            />
            <UserDropdownBtn icon={<CgProfile size={20} />} title="Profile" />
          </LinkTag>
        </div>
      </Wrapper>

      <Signup
        display={authModal === "signup" ? "flex" : "hidden"}
        formSwitcher={() => dispatch(popUp("login"))}
        setDisplayLoginPopup={() => dispatch(popUp(""))}
      />

      <LoginForm
        display={authModal === "login" ? "flex" : "hidden"}
        forgotPassword={() => dispatch(popUp("forgot"))}
        formSwitcher={() => dispatch(popUp("signup"))}
        setDisplayLoginPopup={() => dispatch(popUp(""))}
      />

      <ForgotPassword
        display={authModal === "forgot" ? "flex" : "hidden"}
        formSwitcher={() => dispatch(popUp("login"))}
        setDisplayLoginPopup={() => dispatch(popUp(""))}
      />
    </>
  );
}

export default TopNavbar;
