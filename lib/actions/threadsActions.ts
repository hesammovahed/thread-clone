'use server'
import {connectToDB} from "@/lib/mongoose/mongoose";
import Thread from "@/lib/models/thread.model";
import User from "@/lib/models/user.model";
import {revalidatePath} from "next/cache";

interface props {
    author: string,
    text: string,
    communityId: string | null,
    path: string,
}

export async function createThread({author, communityId, text, path}: props) {
    await connectToDB()

    const createThread = await Thread.create({
        text, author,
        community: null,
    })
    //update user
    await User.findByIdAndUpdate(author, {
        $push: {threads: createThread._id}
    })

    revalidatePath(path)
}

export async function getAllThreads(pageNumber = 1 ,pageSize = 20) {
    await connectToDB()
    // get just top level posts
    const data = await Thread.find({parentId: {$in: [null, undefined]}})
        .sort({createdAt: -1}).limit(pageSize)
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .populate({path: "author", model: User})
        .populate({
            path: "children",
            populate: {
                path: "author", model: User, select: "_id name parentId image"
            }
        })
    return data
}