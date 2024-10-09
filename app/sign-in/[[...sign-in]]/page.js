import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import banner from "../../public/banner.jpg";
export default function Page() {
  return (
    <div>
      <Image className="h-full w-full object-contain" src={banner} width={900} height={1000} alt="banner"/>
      <div className=" absolute top-12 left-[50%] ">
          <SignIn />
      </div>
    </div>
  );
}
