"use client"
import ProductCard from '@/app/components/common/ProductCard';
import SelectDropdown from '@/app/components/common/SelectDropdown';
import Wrapper from '@/app/components/common/Wrapper';
import axiosInstance from '@/app/util/axiosWithoutLogin';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import IsLoading from '@/app/components/common/IsLoading';
import { useRouter } from "next/navigation";
import Heading from '@/app/components/filter/Heading';
import CategoryTab from '@/app/components/filter/CategoryTab';
import MinMaxValue from '@/app/components/filter/MinMaxValue';
// import NewProducts from '@/app/components/common/category/NewProducts';
import { Button } from '@/app/components/common/Buttons';
import { useProductPageFilterQuery } from '@/app/redux/query/Queries';


function page() {
  const searchParams = useSearchParams();
  const router = new useRouter();

  const filData = useProductPageFilterQuery();
  console.log(filData.data);


  // use states

  const [fData, setFdata] = useState();
  const [data, setData] = useState();
  const [result, setResult] = useState();
  const [filterData, setFilterData] = useState();

  // use states
  const params = Object.fromEntries(searchParams.entries());

  let route = "/get-products?";
  if (Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    route = route + '' + queryString;
  }

  async function getData(route) {
    const getData = await axiosInstance.get(route);
    setResult(getData?.data?.results);
    setData(getData?.data?.data);

    // const filterData123 =  fiterFun();
    // console.log({filterData123})

    const data = await axiosInstance.get("/filter-data");
    setFdata({ title: data?.data?.title, category: data?.data?.category, product: data?.data?.subCategory })
  }



  useEffect(() => {
    getData(route);
  }, [route]);

  const minMaxSubmitHandler = (e) => {

    let updatedParams;

    if (e?.item) {
      setFilterData({ ...filterData, [e.item]: e.value })
    }

    if (e.item) {
      updatedParams = { ...params, ...filterData, [e.item]: e.value };
    }
    else {
      updatedParams = { ...params, ...filterData };
    }

    const queryString = new URLSearchParams(updatedParams).toString();
    const newRoute = `/products?${queryString}`;
    router.push(newRoute);
  }


  

  return (
    <Wrapper className={"flex flex-col gap-3 px-[5vw] py-5"}>
      <div className='flex justify-between items-center my-4'>
        <span className="text-textPrimary text-[20px]">
          {
            result === 0 ? "Sorry!! We don't have any item related to your match" : !result ? "We are searching..." :
              `We found ${result > 1 ? result + " items" : result + " item"}  for you!`
          }
        </span>
        <SelectDropdown onChangeHandler={(e) => minMaxSubmitHandler(JSON.parse(e))} />
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 ">

        <div className="flex-col gap-4 hidden lg:flex">

          <div className="hidden flex-col gap-5 sticky top-1 vs px-1 lg:flex">
            <Button className="bg-red-500 text-white w-full hover:text-red-500" onClick={() => { setFilterData(''); router.push("/products") }}>
              Clear Filter
            </Button>
            <div className="w-full rounded border-[1px] border-gray-200 flex flex-col gap-2 px-4 shadow-lg pb-4 pt-2 max-h-[200px] vs overflow-y-auto">
              <Heading> Category </Heading>
              {
                fData?.title && fData?.title?.map((item, index) =>
                  <CategoryTab
                    key={index}
                    onClick={() => minMaxSubmitHandler({ item: "title", value: item.title })
                    }
                  >
                    {item?.title}
                  </CategoryTab>
                )
              }
            </div>

            <div className="w-full rounded border-[1px] border-gray-200 flex flex-col gap-2 px-4 shadow-lg pb-4 pt-2 max-h-[200px] vs overflow-y-auto">
              <Heading> Sub Category </Heading>
              {
                fData?.category && fData?.category?.map((item, index) => <CategoryTab
                  key={index}
                  onClick={() => minMaxSubmitHandler({ item: "category", value: item.category })}
                >
                  {item?.category}
                </CategoryTab>
                )
              }
            </div>


            <div className="w-full rounded border-[1px] border-gray-200 flex flex-col gap-2 px-4 shadow-lg pb-4 pt-2 max-h-[200px] vs overflow-y-auto">
              <Heading> Products </Heading>
              {
                fData?.product && fData?.product?.map((item, index) => <CategoryTab
                  key={index}
                  onClick={() => minMaxSubmitHandler({ item: "sub-category", value: item.subCategory })}
                >
                  {item?.subCategory}
                </CategoryTab>
                )
              }
            </div>



            <div className="w-full rounded border-[1px] border-gray-200 flex flex-col gap-4 px-4 shadow-lg pb-4 pt-2 ">


              <Heading> Filter </Heading>
              {
                filterData?.['min-price'] > filterData?.['max-price']
                  ?
                  <span className='text-red-500 text-sm'>
                    Max value must be greater than or equal to min value
                  </span>
                  : ''
              }
              <div className='flex gap-4 '>
                <div className='flex flex-col'>
                  <span className="text-sm text-gray-600">
                    Min:
                  </span>
                  <MinMaxValue
                    value={filterData?.['min-price']}
                    onChange={(e) => setFilterData({ ...filterData, 'min-price': e })}
                  />
                </div>

                <div className='flex flex-col'>
                  <span className="text-sm text-gray-600">
                    Max:
                  </span>
                  <MinMaxValue
                    value={filterData?.['max-price']}
                    onChange={(e) => setFilterData({ ...filterData, 'max-price': e })}
                  />
                </div>

              </div>
              <Button className="py-0 px-1 text-sm bg-bgPrimary text-textWhites mx-auto" onClick={minMaxSubmitHandler}>
                Submit
              </Button>

            </div>

            {/* <NewProducts /> */}
          </div>


        </div>

        <div className='col-span-3 grid grid-cols-3 gap-3  md:gap-5 xs:grid-cols-2 md:grid-cols-3'>
          {

            !data ? <IsLoading /> : data?.map((item, index) => {

              return <ProductCard
                key={Math.random()}
                isPorductCarousel={true}
                deletedPrice={item.price}
                price={!item?.coupon ? item.price : discountCalculation(item?.coupon?.disType, item?.coupon?.discount, item?.price)}
                sizes={item?.productSizeNquantities}
                rating={`${item?.rates[0]?.rate} by ${item?.rates[0]?.people}`}
                images={item?.compressFiles !== null && JSON.parse(item?.compressFiles)}
                brand={item.brand}
                href={`/${item.productName}?id=${item.id}`}
                productName={item.productName}
              />
            }
            )
          }
        </div>

      </div>

    </Wrapper>
  )
}

export default page