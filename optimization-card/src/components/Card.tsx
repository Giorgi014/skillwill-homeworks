import Etherum from "./../assets/etherum.svg";
import Clock from "./../assets/clock.svg";
import type { CardProps } from "../types/type";
import { IoMdEye } from "react-icons/io";

export const Card = ({
  src,
  name,
  description,
  price,
  time,
  user,
  userName,
}: CardProps) => {
  return (
    <div className="relative group w-full max-w-87.5 bg-[#15263F] p-6 rounded-2xl cursor-pointer">
      <div className="relative w-full h-75.5 rounded-lg overflow-hidden group ">
        <img src={src} alt={description} className="w-full h-75.5 rounded-lg" />
        <div className="absolute inset-0 bg-[#00FFF8]/0 group-hover:bg-[#00FFF8]/40 transition-all duration-300 flex items-center justify-center">
          <IoMdEye className="text-white text-4xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" />
        </div>
      </div>
      <h2 className="text-[#FFFFFF] group-hover:text-[#00FFF8] text-[22px] font-semibold mt-6 mb-4 duration-300">
        {name}
      </h2>
      <p className="text-[#8BACD9] text-[18px] font-light leading-6.5 mb-4">
        {description}
      </p>
      <section className="w-full flex justify-between items-center border-b border-[#2E405A] pb-6">
        <div className="flex justify-start items-center gap-[6.48px]">
          <img src={Etherum} alt="currency" className="w-2.75 h-4.5" />
          <p className="text-[#00FFF8] text-[16px] font-semibold leading-[100%]">{`${price} ETH`}</p>
        </div>
        <div className="flex justify-start items-center gap-[7.7px]">
          <img src={Clock} alt="time" className="w-4 h-4" />
          <p className="text-[#8BACD9] text-[16px] font-semibold leading-[100%]">
            {time}
          </p>
        </div>
      </section>
      <section className="flex justify-start items-center mt-6 mb-2 gap-4">
        <img
          src={user}
          alt={userName}
          className="w-8.25 h-8.25 rounded-full border border-[#FFFFFF]"
        />
        <p className="text-[#8BACD9] text-[16px] font-normal leading-[100%]">
          Creation of{" "}
          <span className="text-[#FFFFFF] text-[16px] font-normal leading-[100%] hover:text-[#00FFF8] duration-300">
            {userName}
          </span>
        </p>
      </section>
    </div>
  );
};
