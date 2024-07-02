"use client"
import { Tooltip } from '@mui/material'
import React from 'react'
import { tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';

import { MdOutlineAddShoppingCart } from "react-icons/md";


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        // backgroundColor: '#76b1f9',
        backgroundColor: '#495e57',
        color: 'white',
        maxWidth: 220,
        fontSize: 12,
        border: '1px solid #dadde9',
        boxShadow:"0 0 20px -5px #1976d282"
    },
}));

function TooltipMUI({icon, tooltipText, className, onClick}) {
    return (
        <button type="button" onClick={onClick}>
        <HtmlTooltip
            placement={"top"}
            followCursor
            title={ tooltipText && <div> {tooltipText} </div>}
        >
                <div className={`centerMe relative group/tooltop cursor-pointer text-textWhites ${className ? className : "w-11 h-11 rounded-full bg-bgPrimary"} `}>
                {
                    icon || <MdOutlineAddShoppingCart size={23} />
                }
            </div>

        </HtmlTooltip>
        </button>
    )
}

export default TooltipMUI