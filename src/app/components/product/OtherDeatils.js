
const Tag = ({heading, title}) => {
    return <div className="flex gap-1">
        <span> {heading} </span>
        <span className="text-textSecondary"> {title} </span>
    </div>
}


function OtherDeatils() {
  return (
    <div className="flex flex-col gap-2.5 text-gray-500 text-sm">
        <Tag heading={"SKU:"} title="FWM15VKT" />
        <Tag heading={"Tags:"} title="Cloth" />
        <Tag heading={"Availability:"} title="Items in stock" />
    </div>
  )
}

export default OtherDeatils