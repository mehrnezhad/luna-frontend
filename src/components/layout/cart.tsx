import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoChevronBackSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
const Cart = () => {
  return (
    <>
    <div className="relative group">
        <div className='py-4'>
          <AiOutlineShoppingCart size={'32px'}/>
            <div className="absolute w-[400px] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible text-zinc-700 dark:text-white  bg-white dark:bg-zinc-700 p-5 border-t-[3px] border-orange-300 rounded-2xl shadow-normal delay-75">
                {/* header cart*/}
                <div className="flex items-center justify-between">

                    <div>1 مورد</div>

                    <div className="flex items-center text-orange-400">
                        <Link href="">مشاهده سبد خرید</Link>
                        <IoChevronBackSharp size={20}/>
                    </div>
                </div>
                {/* body cart */}
               <div className="max-h-[340px] overflow-auto pl-2">
                  
                  <div className="flex py-5 border-b border-b-gray-300 dark:border-b-white/10">
                  <Image
                                            src="/images/products/p1.png"
                                            alt="لوگو سایت"
                                            width={120}
                                            height={120}
                                            
                   />
              
                   <div className="flex flex-col justify-between">
                       <h3 className="text-zinc-700 dark:text-white text-base line-clamp-2">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h3>
                       <div>
                             <div className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                               14.500 تومان تخفیف
                             </div>
                             <div className="text-zinc-700 dark:text-white text-xl font-DanaMedium">
                             175,000
                             <span className="font-Dana text-sm">تومان</span>
                             </div>
                       </div>
                   </div>

                  </div>
                  
                  <div className="flex py-5 border-b border-b-gray-300 dark:border-b-white/10">
                   
                  <Image
                                            src="/images/products/p2.png"
                                            alt="لوگو سایت"
                                            width={120}
                                            height={120}
                                            
                   />
                   <div className="flex flex-col justify-between">
                       <h3 className="text-zinc-700 dark:text-white text-base">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h3>
                       <div>
                             <div className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                               14.500 تومان تخفیف
                             </div>
                             <div className="text-zinc-700 dark:text-white text-xl font-DanaMedium">
                             175,000
                             <span className="font-Dana text-sm">تومان</span>
                             </div>
                       </div>
                   </div>

                  </div>
            
    
                  <div className="flex py-5 border-b border-b-gray-300 dark:border-b-white/10">
                   
                  <Image
                                            src="/images/products/p3.png"
                                            alt="لوگو سایت"
                                            width={120}
                                            height={120}
                                            
                   />
                   <div className="flex flex-col justify-between">
                       <h3 className="text-zinc-700 dark:text-white text-base">قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h3>
                       <div>
                             <div className="text-teal-600 dark:text-emerald-500 text-xs font-DanaMedium">
                               14.500 تومان تخفیف
                             </div>
                             <div className="text-zinc-700 dark:text-white text-xl font-DanaMedium">
                             175,000
                             <span className="font-Dana text-sm">تومان</span>
                             </div>
                       </div>
                   </div>

                  </div>
            

               </div>



                {/* footer cart */}
                 <div className="flex justify-between pt-5">
                    <div className="flex flex-col justify-end ">
                        <div className="dark:text-gray-300 text-xs font-Dana tracking-tight ">مبلغ قابل پرداخت</div>
                        <div className="text-zinc-700 dark:text-white font-DanaDemiBold text-xl">350,000 <span className="font-Dana text-sm text-zinc-700 dark:text-white">تومان</span></div>
                    </div>
                    <Link href="#" className="w-36 h-14 bg-emerald-500 hover:bg-teal-700 dark:bg-emerald-600 dark:hover:bg-teal-700 transition-colors rounded-xl leading-[56px] text-center text-white font-DanaDemiBold">ثبت سفارش</Link>
                 </div>

            </div>
        </div>
    </div>
</>
  )
}

export default Cart