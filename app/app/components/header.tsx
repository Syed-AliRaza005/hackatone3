import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="banner w-screen h-auto space-y-9">
   
    <div className="bg-slate-300 w-auto h-[100px]">
      
      <div  className=" grid justify-center mobile:w-screen w-screen h-[100px] ">
      
        <div className=" flex justify-center  place-items-center mobile:w-auto   w-screen h-[100px] top-[29px] left-[54] "> 
      
        <div className=" grid mobile:w-auto  grid-cols-3 w-[1286px]  h-[48px] top-[29px] left-[54] ">
      
        
         <div  className="frame168 mobile:w-auto  mobile:place-items-center mobile:justify-between flex place-items-center text-center w-auto h-[48px] top-[29px] left-[54]  ">
         <Image  src={"/images/logo.svg"}
          alt="logo"
          width={50}
          height={32}/>
          <p className="font-mones text-[34px]  text-center font-bold">Furniro</p> 
          

          </div>    
    
         <div className=" grid grid-cols-4 mobile:w-[100px] mobile:grid    mobile:h-auto mobile:grid-cols-2 place-items-center mt-3 w-[430px] h-6 mobile:ml-[70px]  mobile:mt-1 top-[38px] left-[505] xmobile:hidden ">
      
         <Link href="/"> <p className=" left-[505px] top-[38]  font-medium text-base">
            Home
          </p>
         </Link>
         <Link href="/shop"><p className=" left-[628px] top-[38] font-medium text-base">
            Shop
          </p></Link>
          <Link href={"/blog"}>
          <p className=" left-[754px] top-[38] font-medium text-base">
            Blog
          </p>       </Link>  
         <Link href={"/contact"}> <p className=" left-[869px] top-[38] font-medium text-base">
            Contact
          </p></Link>
        
         
         

          </div>    
         
           <div className="flex gap-3 w-auto justify-end h-[48px] place-items-center grid-cols-4 mobile:w-[70px] mobile:grid mobile:ml-16 mobile:h-[60px] mobile:grid-cols-2 xmobile:hidden  ">
        
          <div className="box1 w-[28px] h-[28px] top-[36px] left-[1093]">
            <Image 
            src={"/images/box1.svg"}
            alt="box1"
            width={23.33}
            height={18.67}/>
            </div> 
            <div className="box2 w-[28px] h-[28px] top-[36px] left-[1166]">
            <Image 
            src={"/images/box2.svg"}
            alt="box2"
            width={22.17}
            height={22.17}/>
            </div>     
            <div className="box3 w-[28px] h-[28px] top-[36px] left-[1239]">
            <Image 
            src={"/images/box3.svg"}
            alt="box3"
            width={23.33}
            height={20.81}/>
            </div>     
           
           <Link href={"/cart"} > 
            <Image className="box4 w-[28px] h-[28px] top-[36px] left-[1312]"
            src={"/images/box4.svg"}
            alt="box4"
            width={24.53}
            height={22.06}/>
            </Link> 
            </div>
           
           </div> 
          
                  
           
       

        </div>
      </div>
        
    </div>
   
   
    
    </div>

  );
}

export default Header;