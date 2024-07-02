function NumberFormater({number}) {
    return number && number !== null && number !== undefined && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default NumberFormater