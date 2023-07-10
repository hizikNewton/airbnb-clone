
import { Outlet } from "react-router-dom";
import Header from "../header";
import { LayoutContainer, Main } from "./styled";
import Nav from "../nav";


const Layout = () => {
    return (
        <LayoutContainer>

            <Header />
            <Nav />
            <Main>
                <Outlet />
            </Main>
        </LayoutContainer>
    );
}
export default Layout