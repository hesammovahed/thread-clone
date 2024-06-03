import { IoHome ,IoSearch } from "react-icons/io5";
import { BsActivity } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { LuUserCircle2 } from "react-icons/lu";

export const sidebarLinks = [
    {
        route: '/',
        label: "Home",
        icon: <IoHome size={25} />
    },
    {
        route: '/search',
        label: "Search",
        icon: <IoSearch size={25} />
    },
    {
        route: '/activity',
        label: "Activity",
        icon: <BsActivity size={25} />
    },
    {
        route: '/create-post',
        label: "Create Post",
        icon: <FaPlusCircle size={25} />
    },
    {
        route: '/profile',
        label: "Profile",
        icon: <LuUserCircle2 size={25} />
    },
]