import AccountProfile from "@/components/account/AccountProfile";
import {currentUser} from '@clerk/nextjs/server';

const page = async () => {
    const user = await currentUser()
    const signedUser = {}
    const userInitialData = {
        id: user?.id || "",
        userName: user?.username || "",
        image: user?.imageUrl || "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
    }
    return (
        <>
            {user ?
                <>
                    <div className={"text-center mt-4"}>
                        please complete you account
                    </div>
                    <section className={"border p-3 m-2 bg-gray-900 mt-10 rounded"}>
                        <AccountProfile userData={userInitialData} btnTitle={"continue"}/>
                    </section>
                </>
                :
                null
            }
        </>
    )
}
export default page