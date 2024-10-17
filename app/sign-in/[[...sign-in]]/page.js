import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
// import banner from "/banner.jpg";
export default function Page() {
  return (
    <div className="flex justify-center ">
      <Image className="h-screen  hidden md:block  w-full object-cover" src="/banner.jpg" width={900} height={1000} alt="banner"/>
      <div className="md:absolute md:top-20 md:right-10">
          <SignIn />
      </div>
    </div>
  );
}
