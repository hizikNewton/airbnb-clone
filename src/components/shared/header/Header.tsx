import { FC } from 'react'
import { HeaderContainer } from './styled'
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Search } from "assets/images/icons/searchIcon.svg";
import Button from 'components/button';
import Dropdown from 'components/dropDown';
import { dropdownoption } from './data';
import Container from '../container';

const Header: FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <div><Logo /></div>
                <div>
                    <span>Anywhere</span>
                    <span>Any week</span>
                    <span>Add guests</span>
                    <div><Search /></div>
                </div>
                <div>
                    <Button text="Airbnb your home" />
                    <Button iconName="globe" />
                    <Dropdown options={dropdownoption} type="action" />
                </div>
            </HeaderContainer>
        </Container>
    )
}

export default Header