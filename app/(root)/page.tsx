import {getAllThreads} from "@/lib/actions/threadsActions";

const page = async () => {
    const getThreads = await getAllThreads(1, 30)
    return (
        <>
            hello from main page
        </>
    )
}
export default page