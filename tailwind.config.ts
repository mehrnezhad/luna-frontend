import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

interface MyPluginUtilities {
  addVariant: (name: string, variant: string) => void;
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '1.5rem', 
          lg: '3rem',
          xl: '4rem',
        }
      },
      backgroundImage: {
        "home-desktop": "url(../../public/images/headerBgDesktop.webp)",
        "home-mobile": "url(../../public/images/headerBgMobile.webp)",
        "product-bg-home": "linear-gradient(rgba(243,244,240,0.65),rgba(243,244,240,0.65)),  url(../../public/images/products-bg.png)",
        "product-bg-home-dark": "url(../../public/images/products-bg.png)",
      },
      fontFamily: {
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "Morabba": "Morabba",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
      },
      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        "tightest": "-0.065em",
      },
      spacing: {
        "30": "7.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addVariant }: MyPluginUtilities) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    }
  ],
};

export default config;
