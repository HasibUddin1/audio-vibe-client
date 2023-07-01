import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Row, Col } from "react-bootstrap";


const Main = () => {
    return (
        <div>
            <Row className="g-0">
                <Col lg={2} className="p-0">
                    <NavigationBar></NavigationBar>
                </Col>
                <Col lg={10} className="p-0">
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Main;