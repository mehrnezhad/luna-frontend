import type { Metadata } from "next";
import Provider from "./provider";
import Footer from "@/components/layout/footer";
import "./globals.css";
import Header from "@/components/layout/header";
import { getCategoriesAttractions } from "@/actions/attraction"; 
import type { AttractionCategoriesType } from "@/type/attraction/attraction_categories";
import NextTopLoader from 'nextjs-toploader';
export const metadata: Metadata = {
  title: {
   default:"آژانس مسافرتی لونا گشت آریا - مجری مستقیم تور مسافرتی",
   template: "%s - لونا گشت آریا "
  },
  description: 'آژانس مسافرتی شرکت خدماتی و گردشگری لونا گشت آریا ارائه دهنده تورهای خارجی، داخلی، تور های هوایی، تور های لحظه آخری با بهترین قیمت',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
}
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   
  const categoriesAttr: AttractionCategoriesType[] = await getCategoriesAttractions();
  
  return (
   
    <html lang="fa" dir="rtl">
      <body className="font-Dana">
        <Provider>
        <NextTopLoader showSpinner={false}/>
         <Header categoriesAttr={categoriesAttr}/>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
