import './SwitchButton.css';

function SwitchButton({isOn, changeSwitch}) {
    const onSwitch = (newStatus) => {
        changeSwitch(newStatus);
    };

    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={isOn} onChange={() => onSwitch(!isOn)}/>
                <span className="slider"></span>
            </label>
        </> );
}

export default SwitchButton;