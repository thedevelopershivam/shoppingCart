import React from 'react'
import BloggingCard from './BloggingCard'
import Wrapper from '../Wrapper'
import { H1 } from '../Headings'
import { RiBloggerFill } from "react-icons/ri";


function BlogWrapper({ blogData }) {

    return (
        <Wrapper className='flex flex-col gap-2 px-[5vw]'>
            <H1 icon={<RiBloggerFill />}> Our Latest Blogs  </H1>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 ">
                {
                    blogData && blogData?.map((item, index) =>
                        <BloggingCard
                            image={item?.compressFile}
                            topic={item?.topic}
                            title={item?.title}
                            text={item?.details}
                            dateTime={item?.createdAt}
                            key={index}
                        />
                    )
                }
            </div>
        </Wrapper>
    )
}

export default BlogWrapper