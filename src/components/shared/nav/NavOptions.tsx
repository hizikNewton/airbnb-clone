import { FC } from 'react'
import { Filter, NavAndFilter, NavCategory, NavCategoryContainer, NavContainer, StyledNavOption } from './styled'
import Container from '../container'
import { navLinks } from './navLinks'
import { NavOptionType } from 'types'
import Button from 'components/button'


const Nav: FC = () => {
    return (
        <Container>
            <NavContainer>
                <NavAndFilter>
                    <NavCategoryContainer>
                        <NavCategory >
                            {navLinks.map(({ iconLink, name }) => <NavOption iconLink={iconLink} name={name} />)}
                        </NavCategory>
                    </NavCategoryContainer>

                    <Filter>
                        <Button text="Filter" />
                    </Filter>

                </NavAndFilter>
            </NavContainer>
        </Container>
    )
}

const NavOption: FC<NavOptionType> = ({ iconLink, name }) => {
    return <StyledNavOption>
        <label>
            <input type={"radio"} />
            <div className='chipset'>
                <span>
                    <img src={iconLink} alt={name} width="24" height="24"></img>
                    <div><span>{name}</span></div>
                </span>
            </div>
        </label>
    </StyledNavOption>
}

export default Nav