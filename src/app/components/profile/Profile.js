import { Button } from "../common/Buttons"

function InputField({type = "text", placeholder="this field is mandatory"})
{
    return  <input type={type} className="border-[1px] border-gray-200 w-full h-12 px-3 focus:outline-none shadow" placeholder={placeholder}/>
}


function Radio({name, label})
{
    return  <label className="flex items-center gap-3">
        <input type="radio" name={name} className="w-4 h-4" />
        <span> {label} </span>
    </label>
    
}

function Profile() {
  return (
    <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-5">
           <InputField placeholder="first name"/>
           <InputField placeholder="last name"/>
        </div>
        <div className="flex flex-col gap-1">
            <span> Your Gender </span>
            <div className="flex  gap-5 items-center">
            <Radio name="gender" label="Male"/>
            <Radio name="gender" label="Female"/>
            </div>
        </div>

        <div className="flex flex-col gap-1">
            <span> Email Id: </span>
            <InputField type="email" placeholder="your valid email id"/>
        </div>

        <div className="flex flex-col gap-1">
            <span> Mobile No: </span>
            <InputField type="number" placeholder="mobile number"/>
        </div>

        <div className="flex flex-col gap-1">
            <span> Address: </span>
            <section className="flex flex-col md:flex-row gap-5">
                <InputField placeholder="City"/>
                <InputField placeholder="State"/>
            </section>
            
              <textarea className="w-full h-[100px] border-[1px] border-gray-200 p-3 shadow mt-5" placeholder="Address"></textarea>
            
            <section className="mt-5">
                <Button className="w-full bg-bgPrimary text-textWhites">
                    Submit
                </Button>
            </section>


        </div>
        


    </div>
  )
}

export default Profile