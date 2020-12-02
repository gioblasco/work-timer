import { useEffect, useState } from 'react';
import './SwitchButton.css';

function SwitchButton({setVariable}) {
    const [isActive, setIsActive] = useState(false);
    const onButtonClick = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        setVariable(isActive);
        console.log(`[SwitchButton] Is active: ${isActive}`);
    }, [isActive, setVariable]);

    return (
        <>
            <label className="switch">
                <input type="checkbox" onClick={onButtonClick}/>
                <span className="slider"></span>
            </label>
        </> );
}

export default SwitchButton;