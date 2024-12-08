import React from "react";
import Image from "next/image";

function Wr() {
  return (
    <div className="flex w-screen h-[200px]  place-items-center bg-w1">
      <div className="feature grid justify-between gap-12 grid-cols-4 w-screen h-auto ">
        <div className="box1 flex grid-cols-2 w-screen h-auto gap-[10px]">
            <Image src={"/images/w1.svg"}
            alt=""
            width={60}
            height={60} />
            <div className="text w-screen h-auto gap-[2px]">
        <p className="font-poppins font-semibold text-[25px] text-w3">High Quality</p>
        <p className="font-poppins font-medium text-xl text-w2 ">crafted from top materials</p>
                </div>            
        </div>

        <div className="box2 flex grid-cols-2 w-screen h-auto gap-[10px]">
            <Image src={"/images/w2.svg"}
            alt=""
            width={60}
            height={60} />
            <div className="text w-screen h-auto gap-[2px]">
        <p className="font-poppins font-semibold text-[25px] text-w3"> Warranty Protection</p>
        <p className="font-poppins font-medium text-xl text-w2 ">Over 2 years</p>
                </div>            
        </div>

        <div className="box3 flex grid-cols-2 w-screen h-auto gap-[10px]">
            <Image src={"/images/w3.svg"}
            alt=""
            width={60}
            height={60} />
            <div className="text w-screen h-auto gap-[2px]">
        <p className="font-poppins font-semibold text-[25px] text-w3"> Free Shipping</p>
        <p className="font-poppins font-medium text-xl text-w2 ">Oder over 150 $</p>
                </div>            
        </div>

        <div className="box4 flex grid-cols-2 w-screen h-auto gap-[10px]">
            <Image src={"/images/w4.svg"}
            alt=""
            width={60}
            height={60} />
            <div className="text w-screen h-auto gap-[2px]">
        <p className="font-poppins font-semibold text-[25px] text-w3">24 / 7 Support</p>
        <p className="font-poppins font-medium text-xl text-w2 ">Dedicated support</p>
                </div>            
        </div>

      </div>
    </div>
  );
}

export default Wr;
