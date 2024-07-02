export function discountCalculation(disType, discount, sellingPrice) {
    const dt = disType;
    const dis = Number(discount);
    const sp = Number(sellingPrice);
    if (dt == "rs") {
        const adp = sp - dis;
        return adp;
    }
    if (dt == "per") {
        const adp =  sp - (Math.ceil((sp * dis / 100)));
        return adp;
    }
    return;
}

