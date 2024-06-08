'use client'
import {useState} from "react";
import {createThread} from "@/lib/actions/threadsActions";
import {usePathname, useRouter} from "next/navigation";

interface props {
    userInformation: any
}
const CreatePost = ({userInformation}: props) => {
    const [text, setText] = useState('')
    const pathname = usePathname()
    const router = useRouter()
    const subMit = async () => {
        await createThread({
            text,
            author: userInformation._id,
            path: pathname,
            communityId: null
        })
        router.push("/")
    }

    return (
        <section className={'w-full h-screen flex flex-col gap-5 justify-center items-center'}>
            <div className={"w-[80%]"}>
                <div className={"my-3 font-bold"}>content :</div>
                <textarea className={"w-full bg-gray-900"} maxLength={300} rows={8}
                          onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={subMit}
                    className={"border w-full text-center my-3 rounded-md py-1 px-8 text-white bg-purple-500"}>
                    Post
                </button>
            </div>
        </section>
    )
}
export default CreatePost