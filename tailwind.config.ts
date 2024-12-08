import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        mones: ['var(--font-monsetrat)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        sm : "500px",
       xmobile:"425",
        mobile: {
          max : "425px"
        }
      },
      colors:{
        c1: "#9F9F9F",
        p:"#F4F5F7",
        d1:"#0E0B0B",
        d2:"#3A3A3A",
        d3:"#B0B0B0",
        b1:"#B88E2F",
        i1:"#FCF8F3",
        i2:"#616161",
        a1:"#F9F1E7",
        w1:"#FAF3EA",
        w2:"#898989",
        w3:"#252525"
        
      }
    },
  },
  plugins: [],
};
export default config;
