import Link from "next/link"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMiniChevronLeft, HiOutlineArrowsRightLeft, HiOutlineStar } from "react-icons/hi2";
const ProductHomePage = () => {
  return (
    <>
      <section className="pb-5 pt-8 md:pt-12 lg:pt-40 md:bg-product-bg-home md:dark:bg-product-bg-home-dark bg-no-repeat bg-cover dark:bg-zinc-900 bg-gray-100">
        {/* product header */}
        <div className="container">
          <div className="mb-5 md:mb-12 flex items-end justify-between">
            <div>

              <div className="section-title">
                <h3>جدیدترین محصولات</h3>
              </div>
              <div className="section-subtitle">
                فرآوری شده از دانه قهوه
              </div>

            </div>

            <Link href="#" className="section-link">
              <span className="hidden md:inline-block">
                مشاهده همه محصولات
              </span>
              <span className="inline-block md:hidden">
                مشاهده همه
              </span>
              <HiMiniChevronLeft size={20} />
            </Link>
          </div>
        </div>

        {/* products body */}
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5 child:p-2 child:md:p-5">

            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p1.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>
      
            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p2.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>
        
            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p3.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>
               
            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p4.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>
        
            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p5.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>

            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p6.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 text-sm md:h-14 h-10 md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>

            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p7.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>

            <div className="rounded-2xl bg-white shadow-normal dark:bg-zinc-700 overflow-hidden">
              <div className="relative">
                <img src="/images/products/p8.png" className="mx-auto md:w-auto w-32" alt="p1"></img>
                <span className="absolute top-1 right-1 bg-orange-300 rounded-full px-2.5 md:px-3  h-5 leading-[24px] md:h-[30px] md:leading-[34px] dark:text-zinc-700 text-white text-xs md:text-sm"> 12%</span>
              </div>
              <h3 className="mb-2.5 md:h-14 h-10 text-sm md:text-lg dark:text-white text-zinc-700 font-medium line-clamp-2">
                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
              </h3>
              <div className="flex gap-x-2 md:gap-x-2.5">
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-teal-600 dark:text-emerald-500 font-DanaDemiBold">
                    154,000
                  </span>
                  <span className="text-xs md:text-sm text-teal-600  dark:text-emerald-500 tracking-tighter">
                    تومان
                  </span>
                </div>
                <div className="offer">
                  <span className="text-sm md:text-lg">
                    154,000
                  </span>
                  <span className="hidden xl:inline text-sm tracking-tighter">
                    تومان
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex md:gap-3 gap-2">
                  <div className="flex items-center justify-center w-[26px] h-[26px] md:w-[36px] md:h-[36px] bg-gray-100 dark:bg-zinc-800 cursor-pointer hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all  text-gray-400 hover:text-white">
                    <Link href="#">
                      <AiOutlineShoppingCart className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center hover:text-teal-600 cursor-pointer">
                    <HiOutlineArrowsRightLeft className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6  text-gray-300" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                  <HiOutlineStar className="w-4 h-4 md:w-6 md:h-6" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ProductHomePage