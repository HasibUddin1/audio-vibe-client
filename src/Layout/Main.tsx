import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
            <div className="grid">
                <NavigationBar></NavigationBar>
                <div className="d-flex align-items-end justify-content-end w-50 mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;