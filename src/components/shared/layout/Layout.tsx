
import { Outlet } from "react-router-dom";
import Header from "../header";
import { Divider, LayoutContainer, Main } from "./styled";
import Nav from "../nav";


const Layout = () => {
    return (
        <LayoutContainer>
            <Header />
            <Divider/>
            <Nav />
            <Main>
                <Outlet />
            </Main>
        </LayoutContainer>
    );
}
export default Layout