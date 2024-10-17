import Image from "next/image"
import logo from "../../public/errands-logo2.png"
import { UserButton } from "@clerk/nextjs"
import packageIcon from "../../public/package-figure3.png"

const Header = () => {
  return (
    <div className='p-5 pb-3   shadow flex justify-between items-center'>
        <div className="flex items-center gap-8">
            <div>
                <Image className="w-32 md:w-36" src={logo} width='' height='' priority="true" alt="errands"/>
            </div>
            <div className="items-center text-center flex gap-2">
                <Image className="w-8" src={packageIcon} priority="true" width='' height='' alt="errands"/>
                <h1 className="text-sm">Package</h1>
            </div>
        </div>
        <div className="">
            <UserButton />
        </div>
    </div>
  )
}

export default Header
