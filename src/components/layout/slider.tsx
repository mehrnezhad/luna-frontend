import { HiMiniChevronDown } from "react-icons/hi2";
import Image from "next/image"
const Slider = () => {
  return (

    <section className="relative slider h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]">
      <div className="container relative overflow-y-hidden h-full flex items-center justify-end md:min-h-screen">
        <div className="text-white">
          <div className="font-Morabba md:text-5xl text-xl flex flex-row gap-x-2">
            <Image
              src="/images/logo-slider.webp"
              alt="آژانس مسافرتی لونا گشت"
              width={45} // Adjusted for mobile
              height={37} // Adjusted for mobile
              className="md:w-[70px] md:h-[56px] w-[45px] h-[37px]" // Mobile width and height, changes at md breakpoint
           
            />

            <h1 className="font-MorabbaBold md:text-6xl text-2xl md:mb-2 mb-0.5">لونا گشت آریا</h1>
          </div>
          <div className="font-Morabba md:text-5xl text-xl">تجربه سفر خاطره انگیز</div>
          <span className="block w-[100px] md:h-0.5 h-0.25 bg-orange-300 md:my-8 my-3"></span>
          {/* <p className="md:max-w-[460px] max-w-[200px]">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
      */}
        </div>

        {/* curve */}
        <svg className="absolute bottom-0 left-0 right-0 mx-auto hidden md:flex w-[100px] h-[22px] text-gray-100 dark:text-zinc-700">
          <use href="#curve"></use>
        </svg>
        {/* circle */}
        <div className="circle circle-main circle-lg translate-y-1/2 hidden md:flex">
          <div className="circle circle-md">
            <div className="circle circle-sm">
            </div>
          </div>
        </div>
      </div>

      <div className="items-center justify-center hidden md:flex border border-orange-400 rounded-full w-[30px] h-[30px] absolute bottom-0 right-0 left-0 mx-auto translate-y-1/2">
        <HiMiniChevronDown size={20} />
      </div>
    </section>
  )
}

export default Slider