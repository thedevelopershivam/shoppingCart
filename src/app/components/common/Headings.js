import { BiCategoryAlt } from "react-icons/bi";

export function H1({ children, className, icon }) {
    return (
        <div className={`flex gap-1 items-center text-[calc(20px+1vw)] font-semibold text-textPrimary ${className}`}>

            {icon || <BiCategoryAlt/>}

            {children || "heading 1"}
        </div>
    )
}
