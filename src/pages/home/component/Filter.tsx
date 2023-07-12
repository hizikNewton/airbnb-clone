import { CustomToggleStyle, FilterContainer, FilterText } from "./styled"
import { ReactComponent as CheckMark } from "assets/images/icons/check.svg"

const CustomToggle = ()=>{
    return(
        <CustomToggleStyle>
            <label className="toggle" htmlFor="uniqueID">
                <input type="checkbox" className="toggle__input" id="uniqueID" />
                <span className="toggle-track">
                    <span className="toggle-indicator">
                        <span className="checkMark">
                            <CheckMark/>
                        </span>
                    </span>
                </span>
            </label>
    </CustomToggleStyle>
    )
}

export const Filter = ()=>{
    return <FilterContainer>
        <FilterText>
            <span>Display total price</span>
            <span>Includes all fees,before taxes </span>
            
        </FilterText>
        <CustomToggle/>
    </FilterContainer>
}