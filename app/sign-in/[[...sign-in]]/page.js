import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import banner from "../../public/banner.jpg";
export default function Page() {
  return (
    <div>
      <Image className="h-full w-full object-contain" src={banner} width={900} height={1000} />
      <div className=" absolute top-10 right-20">
          <SignIn />
      </div>
    </div>
  );
}
