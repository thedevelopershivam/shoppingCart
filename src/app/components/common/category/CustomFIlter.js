import React, { useEffect, useState } from 'react'
import NewProducts from './NewProducts'
import axiosInstance from "../../../util/axiosWithoutLogin";
import MinMaxValue from '../../filter/MinMaxValue';
import CategoryTab from '../../filter/CategoryTab';
import SizeTab from '../../filter/SizeTab';







const Heading = ({ children }) => <h3 className='text-xl font-semibold text-textPrimary py-1 border-b border-b-gray-300'>
    {children}
</h3>











function CustomFilter({ onChange }) {
    
    
    const [filterData, setFilterData] = useState();
    const [fData, setFdata] = useState();
    let route = "/products?";

    async function getFilterResponse() {
        const queryString = new URLSearchParams(filterData).toString();
        route = route+''+queryString;
        onChange(route)
    }
    getFilterResponse();
    


    const sizesArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

    const getFilterData = async () => {
        
    }
    

    useEffect(() => {
        getFilterData();
    }, [])

    return (
        
    )
}

export default CustomFilter