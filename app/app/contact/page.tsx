import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wr from "../components/wr";
import Image from "next/image";
function Contact() {
  return (
    <div>
      <Header />
    <div className="hero w-screen h-auto">
      <Image className="object-cover"
      src={"/images/c2.svg"}
      alt=""
      width={1440}
      height={316}/>
    
    </div>

     <div className="grid place-items-center w-screen h-auto gap-12 justify-between mt-12"> 

   <div className="g162 grid place-items-center justify-center w-screen h-auto top-[416px] bg-white">   
      <p className="font-semibold text-[36px] leading-[54px]">Get In Touch With Us</p>
      <p className="font-[400px] text-base text-center text-wrap w-[660px] h-auto text-c1">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate! 
      </p>

      <div className="g161 grid grid-cols-2 w-screen h-auto gap-4 mt-16">

        <div className="grid grid-rows-3 gap-3 place-items-center">
      
          <div className=" grid-rows-3  place-items-start w-auto h-auto">
        <Image src={"/images/l.svg"}
          alt=""
          width={22}
          height={28}/>

    <p className="font-medium text-[24px] leading-[36px]">Address</p>

      <p className="font-[400px] text-base text-wrap w-[120px] h-auto ">
      236 5th SE Avenue, New York NY10000, United States
      </p>
      </div>
      <div className=" grid-rows-3 
      place-items-start w-auto h-auto">
        <Image src={"/images/l2.svg"}
          alt=""
          width={22}
          height={28}/>

    <p className="font-medium text-[24px] leading-[36px]">Phone</p>

      <p className="font-[400px] text-base text-wrap w-[120px] h-auto ">Mobile: +(84) 546-6789
      Hotline: +(84) 456-6789
      </p>
      </div>
      <div className=" grid-rows-3 
      place-items-start w-auto h-auto">
        <Image src={"/images/l3.svg"}
          alt=""
          width={22}
          height={28}/>

    <p className="font-medium text-[24px] leading-[36px]">Working Time</p>

      <p className="font-[400px] text-base text-wrap w-[120px] h-auto ">
      Monday-Friday: 9:00 - 22:00
      Saturday-Sunday: 9:00 - 21:00
      </p>
      </div>
        </div>
       
       
        <div className="grid grid-rows-6 gap-4 w-screen h-auto ">
        
        <div className="grid grid-rows-2">
          <p className="font-medium text-base ">Your Name</p>
        <input type="text" className="border border-c1 rounded-[4px] w-[250px]" placeholder="abc" />
        </div>

        <div className="grid grid-rows-2">
          <p className="font-medium text-base ">Email</p>
        <input type="email" className="border border-c1 rounded-[4px] w-[250px]" placeholder="abc@gmail.com" />
        </div>
        
        <div className="grid grid-rows-2">
          <p className="font-medium text-base ">Subject</p>
        <input type="text" className="border border-c1 rounded-[4px] w-[250px]" placeholder="optional" />
        </div>
        
        <div className="grid grid-rows-2">
          <p className="font-medium text-base ">Message</p>
        <input type="description" className="border border-c1 rounded-[4px] w-[250px]" placeholder="abc" />
        </div>
        
      <button className="w-16 h-14 bg-b1 hover hover:bg-yellow-700 rounded-[4px]">Submit</button>
        
        </div>
      </div>

   </div>


       <Wr />
     </div> 
      <Footer />
    </div>
  );
}

export default Contact;
