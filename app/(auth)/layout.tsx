import "../globals.css"
import {ClerkProvider} from "@clerk/nextjs";

export const metadata = {
    title: "sign",
    description: "Signup page",
}

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <html>
            <ClerkProvider>
                <body className={"bg-black text-white h-screen"}>
                <div>
                    {children}
                </div>
                </body>
            </ClerkProvider>
            </html>
        </>
    )
}
export default Layout