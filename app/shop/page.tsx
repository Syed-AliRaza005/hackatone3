import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wr from "../components/wr";
import Image from "next/image";
function Shop() {
  return (
    <div>
      <Header />
    <div className="hero w-screen h-auto">
      <Image 
      src={"/images/hero2.svg"}
      alt=""
      width={1440}
      height={316}/>
    </div>
    <div className="filter flex gap-16  place-items-center justify-between  w-screen h-auto bg-a1">
    
      <div className="g57 flex w-[85px] h-[30px] gap-3 left-[98px] top-[452px] ">
      <Image 
      src={"/images/a1.svg"}
      alt=""
      width={25}
      height={25}/>

        <p className="font-[400px] font-poppins text-xl">Filter</p>
      </div>
      
      <div className="bil w-[150px] h-auto">
      <Image 
      src={"/images/a2.svg"}
      alt=""
      width={24}
      height={24}/>
      </div>

       <div className="cil w-[150px] h-auto">
      <Image 
      src={"/images/a3.svg"}
      alt=""
      width={24}
      height={24}/>
      </div>     

      <div className="g62 flex place-items-center
       w-screen h-auto gap-[34px] ">
      <div className="w-[1px] h-[37px] bg-c1"></div>
      <p className="font-poppins font-[400px] text-base">Showing 1 - 16 of 32 results</p>
      </div>

      <div className="g60 gap-2 justify-center place-items-center  flex w-screen h-auto  ">
         <p className="font-poppins font-[400px] text-xl">Show</p>
         <div className="w-12 h-auto text-center"> <p className="font-poppins font-[400px] bg-white text-base">
          16
          </p></div>
      </div>

      <div className="g61 gap-2 flex justify-center place-items-center w-screen h-auto">
         <p className="font-poppins font-[400px] text-xl">Shortby</p>
         <div className="bg-white w-[80px] h-auto text-center"> <p className="font-poppins font-[400px] text-base ">Default</p></div>
      </div>
    </div>
   
     <div className="grid place-items-center w-screen h-auto gap-12 justify-between mt-12"> 
     <div className="frame1 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
          
          <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className=" ">
               
             
                 <Image src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
        
            
            
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>

          </div>
          <div className="fp2 hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className="bg  hover:bg-d3 hover">    
                 <Image className="b"
                 src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto ">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>
            </div>

        
          
          <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
            
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
           <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
        <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
      </div>

      <div className="frame2 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
        
        <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
          
            <div className=" ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
      
          
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>

        </div>
        <div className="fp2 bg-p  hover:bg-d3 hover place-items-center w-auto h-[446px]">
          
            <div className="bg  hover:bg-d3 hover">    
               <Image className="b"
               src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto ">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>
          </div>

        <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
          
         <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
      <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
        
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
        
        <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
      </div>
      <div className="frame3 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
          
          <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className=" ">
               
             
                 <Image src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
        
            
            
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>

          </div>
          <div className="fp2 hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className="bg  hover:bg-d3 hover">    
                 <Image className="b"
                 src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto ">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>
            </div>

        
          
          <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
            
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
           <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
        <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
      </div>

      <div className="frame4 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
        
        <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
          
            <div className=" ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
      
          
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>

        </div>
        <div className="fp2 bg-p  hover:bg-d3 hover place-items-center w-auto h-[446px]">
          
            <div className="bg  hover:bg-d3 hover">    
               <Image className="b"
               src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto ">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>
          </div>

        <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
          
         <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
      <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
        
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
        
        <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
    </div>
    <div className="frame5 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
          
          <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className=" ">
               
             
                 <Image src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
        
            
            
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>

          </div>
          <div className="fp2 hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
            
              <div className="bg  hover:bg-d3 hover">    
                 <Image className="b"
                 src={"/images/chair.svg"}
              alt="chair"
              width={284}
              height={301}/>

              </div>
              
            <div className="pn ">
              <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
              <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
            </div>
            <div className="price  h-auto w-auto ">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
            </div>
            </div>

        
          
          <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
            
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
           <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
        <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
            <div className="bg ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
              <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
              <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
              <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
              </div>
          </div>

        </div>
      </div>

      <div className="frame6 grid grid-cols-4 mobile:grid-rows-4 gap-4 w-screen h-auto">
        
        <div className="fp1  hover:bg-d3 hover place-items-center bg-p  w-auto h-[446px]">
          
            <div className=" ">
             
           
               <Image src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
      
          
          
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>

        </div>
        <div className="fp2 bg-p  hover:bg-d3 hover place-items-center w-auto h-[446px]">
          
            <div className="bg  hover:bg-d3 hover">    
               <Image className="b"
               src={"/images/chair.svg"}
            alt="chair"
            width={284}
            height={301}/>

            </div>
            
          <div className="pn ">
            <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
            <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
          </div>
          <div className="price  h-auto w-auto ">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
          </div>
          </div>

        <div className="fp3  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
          
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
          
         <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
      <div className="fp4  hover:bg-d3 hover place-items-center bg-p w-auto h-[446px]">
        
          <div className="bg ">
           
         
             <Image src={"/images/chair.svg"}
          alt="chair"
          width={284}
          height={301}/>

          </div>
        
        <div className="pn ">
          <h4 className="font-poppins font-semibold text-2xl">Syltherine</h4>
          <p className="font-poppins font-[400px] text-base text-d1">Stylish cafe chair</p>
        </div>
        <div className="price  h-auto w-auto bg-white">
            <div className="fr6 grid grid-cols-2  mobile:grid-rows-2  gap-16   mobile:grid"> 
            <p className="fixprice font-poppins font-semibold text-xl  text-d2  ">Rp 2.500.000</p>
            <p className="fixprice font-poppins font-semibold text-xl  text-d3  line-through  ">Rp 3.500.000</p>
            </div>
        </div>

      </div>
    </div>
    
    <div className="f72 flex place-items-centergrid-cols-4 w-[350px] h-auto pt-[30px] gap-4">
      <div className="bg-b1 grid w-[60px] h-[60px] rounded-[10px] text-center place-items-center ">1</div>
      <div className="bg-a1 grid w-[60px] h-[60px] rounded-[10px] text-center place-items-center ">2</div>
      <div className="bg-a1 grid w-[60px] h-[60px] rounded-[10px] text-center place-items-center ">3</div>
      <div className="bg-a1 grid w-[98px] h-[60px] rounded-[10px] text-center place-items-center ">next</div>
    </div>
       <Wr />
     </div> 
      <Footer />
    </div>
  );
}

export default Shop;
