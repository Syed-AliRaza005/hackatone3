import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Wr from "../components/wr";
import Image from "next/image";
function Cart() {
  return (
    <div>
      <Header />
    <div className="hero w-screen h-auto">
      <Image className="object-cover"
      src={"/images/cart.svg"}
      alt=""
      width={1440}
      height={316}/>
    
    </div>

     <div className="grid place-items-center w-screen h-auto gap-12 justify-between mt-12"> 

   <div className="g145 w-screen h-auto top-[416px] bg-white">

    <div className="g142 flex grid-cols-2 justify-center place-items-center gap-[100px] w-screen h-auto top-[488px] left-[100px]">
     
      <div className="g144w-auto h-auto top-[488px] left-[100px] ">

        <div className="bg-a1 place-items-center row-span-1  w-auto h-8 grid grid-cols-6">
          <p></p>
          <p className="font-medium text-base ">Product</p>
          <p className="font-medium text-base ">price</p>
          <p className="font-medium text-base ">Quantity</p>
          <p className="font-medium text-base ">Subtotal</p>
        </div>
        <div className=" w-auto h-auto gap-2  mt-4 place-items-center grid grid-cols-6">
         <Image 
         src={"/images/c1.svg"}
         alt=""
         width={108}
         height={105}/>
          <p className="font-medium text-base text-d3 ">Asgaard sofa</p>
          <p className="font-medium text-base text-d3 ">250,000.00</p>
          <p className="border text-center w-8 h-8 border-d3 font-medium text-base text-d3 ">1</p>
          <p className="font-medium text-base ">Rs.250,000.00</p>
          <Image src={"/images/d.svg"}
          alt=""
          width={28}
          height={28}/>
        </div>

      </div>
    
      <div className="g139 grid grid-rows-4  justify-center place-items-center bg-a1 w-[300px] h-auto">
        
        <p className="font-semibold text-[32px] leading-[48px]">Cart Totals</p>
        <div className="flex gap-16">
        <p className="font-medium top-[612px] left-[1022px] text-base">SubTotal</p>
        <p className="font-medium top-[612px] left-[1153px] text-base text-d3">Rs.250,000.00</p>
      </div>
        <div className="flex gap-16">
        <p className="font-medium top-[612px] left-[1022px] text-base">Total</p>
        <p className="font-medium top-[612px] left-[1153px] text-xl text-b1">Rs.250,000.00</p>
      </div>
      <button className="text-center border border-black w-[100px] h-auto rounded-[5px] hover hover:bg-d3">Check Out</button>
      </div>
 

    </div>
   </div>


       <Wr />
     </div> 
      <Footer />
    </div>
  );
}

export default Cart;
