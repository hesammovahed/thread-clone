'use client'
import {useState} from "react";

const CreatePost = ({userInformation}: { userInformation: {} }) => {
    const [text, setText] = useState('')
    return (
        <section className={'w-full h-screen flex flex-col gap-5 justify-center items-center'}>
            <div className={"w-[80%]"}>
                <div className={"my-3 font-bold"}>content :</div>
                <textarea className={"w-full bg-gray-900"} maxLength={300} rows={8}
                          onChange={(e) => setText(e.target.value)}
                />
                <button className={"border w-full text-center my-3 rounded-md py-1 px-8 text-white bg-purple-500"}>
                    Post
                </button>
            </div>
        </section>
    )
}
export default CreatePost