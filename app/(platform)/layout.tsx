import { ClerkProvider } from "@clerk/nextjs";
import { Children } from "react";

const PlatformLayout = ({
    children}:{children: React.ReactNode;
})=>{
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default PlatformLayout;