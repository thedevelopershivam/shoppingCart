import { parseCookies } from 'nookies';
import ProductsCarousel from '@/app/components/common/ProductsCarousel';

import ProductsCategoryWrapper from '@/app/components/Index/ProductsCategoryWrapper';
import MultiTabProducts from './components/Index/MultiTabProducts';
import ProductBanner from './components/common/ProductBanner';

import Collections from './components/common/collection/Collections';
import PopularCategory from './components/common/PopularCategory';
import ProductCarouselWithSideBanner from './components/common/productCarousel/ProductCarouselWithSideBanner';

import DealCardWrapper from './components/common/deal/DealCardWrapper';
import BlogWrapper from './components/common/blog/BlogWrapper';
import axiosInstance from "./util/axiosWithoutLogin";
import AllProducts from './components/Index/AllProducts';
// import { cookies } from 'next/headers';


// redux


async function getProjects() {
  const projects = await axiosInstance.get("/get-title");
  return projects
}

async function page() {
  const cookies = parseCookies()

  const projects = await getProjects()

  console.log("parseCookies.cookies 🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁")
  console.log({cookies})

  return (
    <>
      <div className='flex flex-col gap-20 mx-auto'>
        <ProductsCarousel autoPlay={true} autoPlaySpeed={5000} />
        <ProductsCategoryWrapper productData={projects?.data?.title} />
        <MultiTabProducts featureData={projects?.data?.featureProducts} />
        <ProductBanner />
        <PopularCategory subCategory={projects?.data?.allSubCategories} />
        <Collections />
        <ProductCarouselWithSideBanner
          productCarouselData={projects?.data?.bestSell} 
        />

        <ProductBanner />


        <AllProducts data={projects?.data?.allProducts} />
        {/* <DealCardWrapper /> */}
        <BlogWrapper blogData={projects?.data?.blogs} />

      </div>
    </>
  )
}

export default page