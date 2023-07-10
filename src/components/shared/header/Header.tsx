import { FC } from 'react'
import { HeaderContainer } from './styled'
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as Search } from "assets/images/icons/searchIcon.svg";
import Button from 'components/Button';
import Dropdown from 'components/DropDown';
import { dropdownoption } from './data';

const Header: FC = () => {
    return (
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
    )
}

export default Header