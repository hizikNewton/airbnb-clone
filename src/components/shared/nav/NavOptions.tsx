import { FC, useState } from 'react'
import { Filter, NavAndFilter, NavCategory, NavCategoryContainer, NavContainer, StyledNavOption } from './styled'
import Container from '../container'
import { navLinks } from './navLinks'
import { NavOptionType } from 'types'
import Button from 'components/button'
import { useNavigate } from 'react-router-dom'


const Nav: FC = () => {
    const [active, setActive] = useState<string>('0');
    const navigate = useNavigate()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setActive(value);
        navigate(navLinks[Number(value)].name.toLowerCase())
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
    const isSelected = id?.toString() === selected
    return <StyledNavOption>
        <label >
            <input type={"radio"} name="nav" onChange={handleChange} value={id} />
            <div className='chipset'>
                <span>
                    <img src={iconLink} alt={name} width="24" height="24"></img>
                    <div><span className={`${isSelected ? "isActive" : ""}`} >{name}</span></div>
                </span>
                {isSelected && <div className="active" />}
            </div>
        </label>
    </StyledNavOption>
}

export default Nav