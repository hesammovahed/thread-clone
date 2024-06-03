'use client'
import {usePathname} from "next/navigation";
import {sidebarLinks} from "@/constants/sidebarLinks";
import Link from "next/link";

const Footer = () => {
    const pathName = usePathname()
    return (
        <section className={"sticky bottom-2 w-[95%] p-1 rounded-md mx-auto bg-gray-900 text-white md:hidden"}>
            <div className={"flex w-full justify-between gap-4 px-4"}>
                {sidebarLinks.map((item, i) => (
                    <Link key={i} href={item.route}
                          className={`flex gap-2 py-2 px-3 ${pathName === item.route ? "bg-purple-500 rounded-md" : null}`}>
                        <div>{item.icon}</div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Footer