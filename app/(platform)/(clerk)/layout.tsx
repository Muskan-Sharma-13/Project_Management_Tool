
const ClerkLayout = ({ children }:{
    children:React.ReactNode;
})=>{
    return(
        <div className=" h-full bg-gradient-to-r from-fuchsia-600 to-pink-500">
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
        </div>
    );
};

export default ClerkLayout;

