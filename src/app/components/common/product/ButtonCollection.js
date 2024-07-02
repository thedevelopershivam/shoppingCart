import { Button } from "../Buttons";

function ButtonCollection()
{
    return( 
    <div className='hidden flex-wrap gap-5 md:flex'>
        <Button className="bg-bgSecondary text-textPrimary">
            Feature
        </Button>
        <Button className="bg-bgGrays text-textGrays">
            Hot
        </Button>
        <Button className="bg-bgGrays text-textGrays">
            Sale
        </Button>
    </div> 
 )
}

export default ButtonCollection;