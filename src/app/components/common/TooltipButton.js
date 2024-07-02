import React from 'react'
import { LiaCartPlusSolid } from 'react-icons/lia'

function TooltipButton({ children, icon, width = "w-[120px]", className = "bg-bgPurles" }) {
    return (
        <div className="centerMe w-11 h-11 rounded-full bg-bgPrimary relative group/tooltop cursor-pointer text-textWhites">
            {
                icon || <LiaCartPlusSolid size={23} />
            }
            <section className={`absolute left-auto right-auto w-full text-nowrap flex bottom-full justify-center items-center pb-0 opacity-0 cursor-pointer pointer-events-none group-hover/tooltop:opacity-100 group-hover/tooltop:cursor-pointer group-hover/tooltop:pointer-events-auto group-hover/tooltop:pb-3 duration-300 z-10 ${width}  `}>
                <div className={`text-textWhites px-2 py-1 shadow-lg text-center rounded w-auto text-sm ${className}`}>
                    {children || "Add to cart"}
                </div>
            </section>
        </div>
    )
}

export default TooltipButton