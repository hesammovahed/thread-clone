'use client'
import {sidebarLinks} from "@/constants/sidebarLinks";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {SignedIn, SignOutButton} from "@clerk/nextjs";
import {IoExitSharp} from "react-icons/io5";

const LeftSideBar = () => {
    const pathName = usePathname()
    return (
        <div className={"flex flex-col items-center justify-evenly h-full mt-5"}>
            <div className={"flex flex-col gap-8"}>
                {sidebarLinks.map((item, i) => (
                        <Link key={i} href={item.route}
                              className={`flex gap-2 py-2 px-3 ${item.route === pathName ? "bg-purple-500 rounded-md" : null}`}>
                            <div>{item.icon}</div>
                            <div className={"font-bold hidden lg:block"}>{item.label}</div>
                        </Link>
                    )
                )}
            </div>
            <div className={"flex gap-2 "}>
                <div className={"my-auto"}>
                    <SignedIn>
                        <SignOutButton redirectUrl={"/sign-in"}>
                            <div className={"flex gap-2"}>
                                <IoExitSharp size={25} className={"my-auto cursor-pointer"}/>
                                <p className={"font-bold hidden lg:block"}>log out</p>
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}
export default LeftSideBar