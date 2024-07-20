import { NavBar} from "./_components/navbar";
const DashBoardLayout = ({ children}:{
    children: React.ReactNode;
})=>{
    return(
        <div className="h-full">
            <NavBar/>
            {children}
        </div>
    );
};

export default DashBoardLayout;