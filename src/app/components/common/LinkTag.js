import Link from 'next/link'
import React from 'react'


// className='duration-300 group-hover/drop:rotate-180'

function LinkTag({ children, title, className = "", href, titleClass = '', icon, dir = "ltr", notificationCounting, dropdownClass }) {
    return (href ?
        <Link href={href}
            className={
                `flex gap-1 items-center text-textWhites font-medium navLink dropdown cursor-pointer ${className}`
            }
        >
            {
                title &&
                <div className='flex gap-2.5 justify-center items-center' dir={dir}>
                    <span className={titleClass}>
                        {title}
                    </span>
                    {
                        icon &&
                        <section className='relative'>
                            {icon}
                            {
                                notificationCounting &&
                                <div className='absolute flex justify-center items-center bottom-[40%] left-[35%] w-[20px] h-[20px] rounded-full bg-red-500 p-1 text-textWhites text-[12px]'>
                                    {notificationCounting}
                                </div>
                            }
                        </section>
                    }
                </div>
            }
        </Link>
        : <section
            className={
                `flex gap-1 items-center text-textWhites font-medium navLink dropdown cursor-pointer ${className} group/drop`
            }
        >



            {
                title &&
                <div className='flex gap-2.5 justify-center items-center' dir={dir}>
                    <span className={titleClass}>
                        {title}
                    </span>
                    {
                        icon &&
                        <section className='relative'>
                            {icon}

                            {
                                notificationCounting &&
                                <div className='absolute flex justify-center items-center bottom-[40%] left-[35%] w-[20px] h-[20px] rounded-full bg-red-500 p-1 text-textWhites text-[12px]'>
                                    22
                                </div>
                            }


                        </section>
                    }
                </div>
            }




            {
                children && <div className={`absolute top-full right-0 duration-300 dropdownCard`}>
                    <section className={`flex flex-col h-full max-h-[350px] overflow-y-auto bg-bgWhites rounded-t-[2px] rounded-b-md px-2 py-2.5 text-textPrimary gap-2 vs ${dropdownClass}`}>
                        {children}
                    </section>
                </div>
            }
        </section>



    )
}

export default LinkTag