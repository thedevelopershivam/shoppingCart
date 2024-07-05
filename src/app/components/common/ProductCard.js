"use client"
import StarRating from "./StarRating"
import TooltipMUI from "./TooltipMUI";
import Link from "next/link";
import ProductsCarousel from "./ProductsCarousel";
import Image from "next/image";
import FavHeart from "../../components/common/product/FavHeart";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/app/redux/slices/cartSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useAddToCartMutation } from "@/app/redux/query/Queries";
import { popUp } from "@/app/redux/slices/authPopUpSlice";
import { useEffect } from "react";

const ProductBadge = ({ children }) => {
    return <div className={`pb-0.5 rounded-xl text-xs px-2 text-white opacity-85 ${children.toLowerCase() === "new" ? "bg-red-400 shadow-[0_0_15px_-6px_rgba(250,50,50,1)] " : "bg-blue-400 shadow-[0_0_15px_-6px_rgba(20,20,250,1)]"}`}>
        {children}
    </div>
}

function ProductCard({
    cartItems,
    rating = "4.6%",
    price = 550,
    id,
    deletedPrice = 1000,
    isProductCard = true,
    isPorductCarousel = true,
    fav = true,
    isFavProduct = true,
    images,
    badge,
    brand,
    sizes,
    productName,
    href = "#",
    addToCartData,
}) {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const cartId = useSelector((state) => state.cart.cartId);

    const [addToCartFun, addToCartRes] = useAddToCartMutation();
    const addItemHandler = async () => {
        if (localStorage.getItem("token")) {
            const { data, error } = await addToCartFun({ productId: id });
            dispatch(addCart(data?.data));
        }
        else {
            alert("i am here")
            dispatch(popUp("login"))
        }

        // let newCartItemId = [];
        // let productCart = [];
        
        // if(cart?.cartId.includes(id)){
            //     newCartItemId = cart?.cartId?.filter((item)=> item !== id)
            //     productCart = cart?.cart?.filter((item)=> item.id !== id)
            // }
            // else{
        //     newCartItemId = [...cart?.cartId, id];
        //     productCart = [ ...cart.cart, addToCartData ]
        // }
        
        // const stingifyData = JSON.stringify(productCart);
        // const stingifyDataId = JSON.stringify(newCartItemId);
        
        // localStorage.setItem("cart", stingifyData);
        // localStorage.setItem("cartId", stingifyDataId);
        
        // dispatch(addCart(addToCartData));
    }
        
    useEffect(() => {
        dispatch(addCart(cartItems))
    }, [])

    const isInCart = cartId.some((item) => Number(item) === Number(id));

    


    return (
        <div className={`flex w-full flex-col border-[1px] border-[#1976d22e] rounded shadow-md duration-300 hover:shadow-lg max-h-[420px]`}>

            <section className={`centerMe h-48 w-full bg-gray-100 relative `}>
                {isPorductCarousel ?
                    <ProductsCarousel
                        images={images}
                        alt={productName}
                        imageWrapperClassName={'h-48 centerMe'}
                        imageClassName="max-h-48 w-auto object-contain"
                        arrows={false}
                    /> :
                    <div className="h-48 centerMe">
                        <Image
                            src={images}
                            alt={productName}
                            width={400}
                            height={400}
                            className="max-h-48 w-auto object-cover"
                        />
                    </div>
                }
                {
                    badge &&
                    <div className="flex gap-2 flex-wrap absolute top-2 left-2 z-[99]">
                        {
                            <ProductBadge>
                                {badge}
                            </ProductBadge>
                        }
                    </div>
                }


                <FavHeart isFavProduct={isFavProduct} fav={false} />

            </section>

            <div className="flex flex-col gap-1.5 w-[calc(100%-25px)] py-3 mx-auto">
                {
                    isProductCard &&
                    <span className="capitalize text-textGrays text-sm font-[600] ">
                        {brand || "armani"}
                    </span>
                }
                {/* h-[48px] */}
                <Link href={href}>
                    <h3 className={`text-[calc(16px+.2vw)] font-[500] text-textPrimary leading-6 line-clamp-2 hover:text-textGrays flex flex-col gap-2 mx-auto w-full capitalize ${isProductCard === false && 'items-center'}`}>
                        {productName || "Product Name"}
                    </h3>
                </Link>

                <section
                    className={`flex flex-col gap-2 mx-auto w-full
                ${isProductCard === false && 'items-center'}`}>
                    <StarRating percentage={80}> {rating} </StarRating>

                    <span className={`flex ${isProductCard === false && 'flex-col items-center'} gap-2 font-semibold`}>
                        {
                            isProductCard === false ?
                                <span className="text-gray-400">
                                    Starting From
                                </span>
                                :
                                <del className="text-textGrays">
                                    {deletedPrice} ₹
                                </del>
                        }
                        <span className="text-green-700 text-xl">
                            {price} ₹
                        </span>
                    </span>

                    <div className="flex gap-1.5 mt-2">
                        <span className="font-semibold"> Sizes:  </span>
                        {
                            sizes?.map((item, index) =>
                                <span key={index} className="uppercase px-[5px] border-[1px] border-gray-300 text-[15px] rounded-sm"> {item.size} </span>
                            )
                        }
                    </div>

                    {
                        isProductCard &&
                        <div className="flex justify-between items-center gap-5 w-full">
                            <button type="button" className="text-[calc(16px+.2vw)] font-semibold text-textPrimary hover:text-textGrays">
                                Buy Now
                            </button>
                            {
                                
                                isInCart ?
                                    <TooltipMUI
                                        icon={<MdOutlineRemoveShoppingCart size={23} />}
                                        className={"w-11 h-11 rounded-full bg-bgSecondary"}
                                        tooltipText="Remove from cart"
                                        onClick={addItemHandler}
                                    />
                                    :
                                    <TooltipMUI
                                        tooltipText="Add to cart"
                                        onClick={addItemHandler}
                                    />   
                                }
                        </div>
                    }
                </section>
            </div>


        </div>
    )
}

export default ProductCard