import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:8rem;
    .header_search{
        background-color: #fff;
        border: 1px solid var(--bg-color);
        border-radius: 40px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.0),0 4px 12px rgba(0,0,0,0.05);
        
        transition: box-shadow 0.2s cubic-bezier(0.2,0,0,0,1);
        display:flex;
       align-items:center;
        .search-icon{
            display:inline-block
        }
        &:hover{
            box-shadow: 0 1px 2px rgba(0,0,0,0.08),0 4px 12px rgba(0,0,0,0.25);
        }
        }
    
`
export const headerYourHome = {
    '&:hover': {
        backgroundColor: "var(--bg-color)",
        borderRadius: "var(--border-radius)"

    }
}

export const headerGlobe = {
    '&:hover': {
        backgroundColor: "var(--bg-color)",
        borderRadius: "50%"

    }
}