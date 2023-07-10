import { ReactComponent as Avatar } from "assets/images/Avatar.svg";
import Icon from 'components/Icon';
import React, { useEffect, useRef, useState } from 'react';
import { DDOptionItem, DDOptions, DropDownContainer } from './styled';

interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps {
    options: DropdownOption[];
    type: "selection" | "action"
}

const Dropdown: React.FC<DropdownProps> = ({ options, type }) => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option: DropdownOption) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropDownContainer ref={dropdownRef} className="dropdown">
            <div className={`dropdown-toggle ${type}`} onClick={toggleDropdown}>
                {type === "selection" ? selectedOption ? selectedOption.label : 'Select an option' : <Avatar className='avatar' />}
                <span><Icon name={"search"} width={16} height={16} /></span>
            </div>
            {isOpen && (
                <DDOptions className="dropdown-options">
                    {options.map((option) => (
                        <DDOptionItem
                            key={option.value}
                            className={`dropdown-option ${option === selectedOption ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </DDOptionItem>
                    ))}
                </DDOptions>
            )}
        </DropDownContainer>
    );
};

export default Dropdown;
