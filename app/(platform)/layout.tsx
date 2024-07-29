import { ClerkProvider } from "@clerk/nextjs";
import { Children } from "react";
import { Toaster } from "sonner";

const PlatformLayout = ({
    children}:{children: React.ReactNode;
})=>{
    return (
        <ClerkProvider>
            <Toaster/>
            {children}
        </ClerkProvider>
    )
}

export default PlatformLayout;