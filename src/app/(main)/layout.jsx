import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;