import {FcPieChart} from "react-icons/fc";
import { IoExitSharp } from "react-icons/io5";
import Link from "next/link";
import {OrganizationSwitcher, SignedIn, SignOutButton} from "@clerk/nextjs"
import {dark} from "@clerk/themes"

const Navbar = () => {
    return (
        <nav className={"w-full bg-gray-900 text-white py-3 px-2 flex justify-between"}>
            <div className={"flex gap-2"}>
                <FcPieChart size={25} className={"my-auto"}/>
                <Link href={"/"} className={"md:text-2xl my-auto font-bold"}>
                    Treads
                </Link>
            </div>
            <div className={"flex gap-2 "}>
                <OrganizationSwitcher appearance={{baseTheme:dark}}  />
                <div className={"md:hidden my-auto"}>
                    <SignedIn>
                        <SignOutButton>
                            <IoExitSharp size={25} className={"my-auto cursor-pointer"} />
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}
export default Navbar