import {currentUser} from "@clerk/nextjs/server";
import {getUser} from "@/lib/actions/userActions";
import {redirect} from "next/navigation";
import CreatePost from "@/components/account/CreatePost";

const page = async () => {
    const user = await currentUser()
    if (!user) return null
    const userInformation = await getUser({userId: user?.id})
    if (!userInformation?.onboarded) redirect("/onboarding")
    const plainUserInformation = JSON.parse(JSON.stringify(userInformation));
    return (
        <>
            <CreatePost userInformation={plainUserInformation}/>
        </>
    )
}
export default page