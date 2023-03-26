import React from "react";
import Underline from "./Underline";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSunglassesFill } from "react-icons/bs";

const MiddlePostPart = () => {
  return (
    <div className="w-[573px] h-[125px] bg-white  mt-4 rounded-lg drop-shadow-lg">
    <div className=" flex">
      <div className="ml-5 pt-4">
        <img src="assets/pro.png" />
      </div>
      <div className="pt-4 ml-4">
        <input
          className="bg-[#F0F2F5] rounded-full w-[460px] py-3 searchBox"
          placeholder="What’s on your mind, Tushar?"
        />
      </div>
    </div>
    <Underline className="underline" />

    <div className="flex justify-around mt-2">
      <div className="flex items-center gap-2 font-nun font-semibold	text-base">
        <IoMdPhotos className="text-green-500 text-[20px]"/>
        <h3>Photos/Videos</h3>
      </div>
      <div className="flex items-center gap-2 font-nun font-semibold	text-base">
        <BsEmojiSunglassesFill className="text-orange-500 text-[20px]" />
        <h3>Photos/Videos</h3>
      </div>
    </div>
  </div>
  )
}

export default MiddlePostPart