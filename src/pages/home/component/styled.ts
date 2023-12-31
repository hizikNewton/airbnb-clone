import { styled } from 'styled-components';

export const FilterContainer = styled.div`
    justify-content: center;
    align-items: center;
    padding: 16px;
    column-gap: 14rem;
    display:flex;
    border:1px solid var(--bg-color);
    width:fit-content;
    border-radius:var(--border-radius);
    margin:12px auto;
`

export const FilterText = styled.div`
    
`
export const CustomToggleStyle = styled.div`
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.input-wrapper .label {
  align-items: baseline;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin-bottom: 8px;
}
.input-wrapper .optional {
  color: #5a72b5;
  font-size: 0.9em;
}
.input-wrapper .input {
  border: 1px solid #5a72b5;
  border-radius: 4px;
  height: 40px;
  padding: 8px;
}

.toggle {
  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 700;
  margin-bottom: 16px;
}
.toggle:last-of-type {
  margin: 0;
}

.toggle__input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.toggle__input:not([disabled]):active + .toggle-track, .toggle__input:not([disabled]):focus + .toggle-track {
  border: 1px solid transparent;
  box-shadow: 0px 0px 0px 2px #121943;
}


.toggle-track {
  background: #e5efe9;
  border: 1px solid #5a72b5;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: 30px;
  margin-right: 12px;
  position: relative;
  width: 60px;
}

.toggle-indicator {
  align-items: center;
  background: #121943;
  border-radius: 24px;
  bottom: 2px;
  display: flex;
  height: 24px;
  justify-content: center;
  left: 2px;
  outline: solid 2px transparent;
  position: absolute;
  transition: 0.25s;
  width: 24px;
}

.checkMark {
  fill: #fff;
  height: 20px;
  width: 20px;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}

.toggle__input:checked + .toggle-track .toggle-indicator {
  background: #121943;
  transform: translateX(30px);
}
.toggle__input:checked + .toggle-track .toggle-indicator .checkMark {
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}

@media screen and (-ms-high-contrast: active) {
    .toggle-track {
      border-radius: 0;
    }
  }`