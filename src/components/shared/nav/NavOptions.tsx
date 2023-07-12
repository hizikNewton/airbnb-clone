import { FC, useState } from 'react'
import { Filter, NavAndFilter, NavCategory, NavCategoryContainer, NavContainer, StyledNavOption } from './styled'
import Container from '../container'
import { navLinks } from './navLinks'
import { NavOptionType } from 'types'
import Button from 'components/button'


const Nav: FC = () => {
    const [active, setActive] = useState<string>('0');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setActive(value)
    };

    return (
        <Container>
            <NavContainer>
                <NavAndFilter>
                    <NavCategoryContainer>
                        <NavCategory >
                            {navLinks.map(data => <NavOption data={data} handleChange={handleChange} selected={active} />)}
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

interface TypeNavOption {
    data: NavOptionType
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    selected: string
}

const NavOption: FC<TypeNavOption> = ({ data, handleChange, selected }) => {
    const { iconLink, name, id } = data

    return <StyledNavOption>
        <label >
            <input type={"radio"} name="activeNav" onChange={handleChange} value={id} />
            <div className='chipset'>
                <span>
                    <img src={iconLink} alt={name} width="24" height="24"></img>
                    <div><span>{name}</span></div>
                </span>
                {id?.toString() === selected && <div className="active" />}
            </div>
        </label>
    </StyledNavOption>
}

export default Nav