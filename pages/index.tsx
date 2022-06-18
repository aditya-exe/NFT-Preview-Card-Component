import type { NextPage } from "next";
import ETH from "../public/icon-ethereum.svg";
import VIEW from "../public/icon-view.svg";
import CLOCK from "../public/icon-clock.svg";
import AUTHOR from "../public/image-avatar.png";
import NFT from "../public/image-equilibrium.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="font-outfit max-w-[350px] mx-auto">
      <div className="my-[2rem] mx-[1rem] p-[20px] bg-cardbg rounded-[15px] shadow-[0px 0px 30px 5px (0,0,0,0.75)]">
        <div className="rounded-xl overflow-hidden relative group">
          <Image src={NFT} className="block" />
          <div className="absolute top-0 left-0 h-full w-full group-hover:bg-cyanoverlay opacity-50 cursor-pointer">
            <div className="scale-0 group-hover:scale-100 opacity-100 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <Image src={VIEW}/>
            </div>
          </div>
        </div>
        <div className="box-text">
          <a href="#" className="text-white hover:text-cyanoverlay font-semibold text-xl py-[20px] inline-block ">Equilibrium #3429</a>
          <p className="text-softblue">Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex items-center justify-between py-[25px]">
            <div className="flex items-center">
              <Image src={ETH} />
              <p className="text-cyanoverlay font-semibold pl-[7px]">0.041 ETH</p>
            </div>
            <div className="flex items-center">
              <Image src={CLOCK} />
              <p className="pl-[7px] text-softblue">3 days left</p>
            </div>
          </div>
          <hr className="border-border"/>
          <div className="flex items-center pt-[5px]">
            <img src={'/image-avatar.png'} height={30} width={30} className="ring-1 ring-white rounded-full mr-[15px]"/>
            <p className="text-softblue">
              Creation of <a className="text-white text-[16px] hover:text-cyanoverlay cursor-pointer ">Jules Wyvern</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
