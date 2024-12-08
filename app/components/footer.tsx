import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-screen h-[505px] ">
          
          <div className="w-screen grid place-items-center h-[505px] justify-center stroke-black stroke-2  ">

            <div className="group45 grid justify-center  place-items-center  w-[1240.01px] h-[419px] bg-white top-12 left-[100px] gap-12">

            <div className="group32 flex grid-cols-3 w-[1133.01px] h-[312px] top-12 left-[100px] border  border-black gap-12">
      
          <div className="group3 grid grid-rows-3 ">
            <p className="w-[85px] h-[36px] top-12 left-[100px]font-bold text-2xl leading-[36px] ">Funiro</p>        
            <p className="w-[285px] text-c1 h-[72px] top-[134px] left-[102.01px] font-poppins font-normal text-base ">400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
            </div>
           
            <div className="group31 grid grid-cols-2 row-span-2 w-[710px] h-[312px] top-12 left-[523.01px] gap-12">
          
            <div className="group28  grid grid-cols-3 w-auto h-[312px] top-12 left-[523.01px]  ">      

              <div className="group26 grid w-[68px] h-[312px] top-12 left-[523.01px] "> 
              <p className="w-[40px] text-c1 h-6 top-12 left-[523.01px] font-poppins font-medium text-base ">Link</p>
              
              <div className="group24 grid grid-rows-4  w-[68px] h-[233px] top-[127px] left-[523.01px]">
           
              <Link href="/">   <p className=" font-medium text-base">
            Home
          </p>
         </Link>
         <Link href="/shop"><p className=" left-[628px] top-[38] font-medium text-base">
            Shop
          </p></Link>
            
          <Link href={"/about"}>   
          <p className="  font-medium text-base">
            about

          </p>  </Link>    
          <Link href={"/contact"}>   
          <p className=" font-medium text-base">
            Contact
          </p></Link>   
        
         </div> 

              </div>
                         
              <div className="group27 grid w-[110px] h-[242px] top-12 left-[523.01px] "> 
                   <p className="w-[37px] text-c1 h-6 top-12 left-[735.01px] font-poppins font-medium text-base ">Help</p> 


              <div className="group25 text-nowrap grid grid-rows-4  w-auto h-auto top-[127px] left-[735.01px]">
           
              <p className=" font-medium text-base">
              Payment Options
          </p>
          <p className=" font-medium text-base">
          Returns
          </p>
          <p className="  font-medium text-base">
          Privacy Policies
          </p>         
        
         </div>                      
              </div>

                </div>

              <div className="group30 grid w-auto h-[312px] top-[50px] left-[947.01px]"> 
                <p className="font-poppins font-medium text-base text-c1">Newsletter</p>
             
                <div className="group29 grid grid-cols-2 w-auto h-6 top-[127px] left-[947.01px] bg-white gap-12 text-nowrap">
              
                <p className="underline font-poppins font-normal text-sm text-c1">Enter Your Email Address</p>
            
           
                <p className=" underline font-poppins font-medium text-sm text-black">Subscribe</p>
                  </div>            

            </div>

            </div>
          
            
          </div>

            <div className="group44  place-items-start w-auto h-59 top-[408px] left-[100px]  gap-[35px]">
              <div className="w-[1240px] h-[1px] bg-black"></div>
              <p className="font-poppins font-[400px] text-base">2023 furino. All rights reverved</p>
            </div>
            </div>
          
            
          </div>
          
    </div>
  );
}

export default Footer;