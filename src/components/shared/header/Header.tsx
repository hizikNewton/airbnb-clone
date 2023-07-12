import { FC } from 'react'
import { HeaderContainer, headerYourHome } from './styled'
import { ReactComponent as Logo } from "assets/images/logo.svg";
import Button from 'components/button';
import Dropdown from 'components/dropDown';
import { dropdownoption } from './data';
import Container from '../container';

const Header: FC = () => {
    return (
        <Container>
            <HeaderContainer>
                <div><Logo /></div>
                <div className='header_search'>
                    <Button text='Anywhere' />
                    <Button text="AnyWeek" />
                    <Button text='Add Guest' />
                    <Button iconName="search" />
                </div>
                <div>
                    <Button text="Airbnb your home" customStyle={headerYourHome} />
                    <Button iconName="globe" customStyle={headerYourHome} />
                    <Dropdown options={dropdownoption} type="action" />
                </div>
            </HeaderContainer>
        </Container>
    )
}

export default Header