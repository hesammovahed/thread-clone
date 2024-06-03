'use server'
import {connectToDB} from "@/lib/mongoose/mongoose";
import User from "@/lib/models/user.model";
import {revalidatePath} from "next/cache";

interface props {
    userId: string,
    username: string,
    name: string,
    image?: string,
    bio: string,
    path: string,
}

export async function updateUser({userId, name, image, bio, path, username}: props
): Promise<void> {
    try {
        await connectToDB()
        await User.findOneAndUpdate(
            {id: userId},
            {
                username: username.toLowerCase(),
                name, bio, onboarded: true
            },
            {upsert: true}
        )
        if (path === "/profile/edit") {
            revalidatePath(path)
        }
    } catch (e) {
        throw new Error("Could not update user with id '" + userId + "'")
    }

}

type getUserT = { userId: string }

export async function getUser({userId}: getUserT) {
    try {
        await connectToDB()
        return await User.findOne({userId: userId})
        // .populate({
        //     path: "communities", model: "Community"
        // })
    } catch (e: any) {
        console.error(e, "error in fetch single user")
    }
}