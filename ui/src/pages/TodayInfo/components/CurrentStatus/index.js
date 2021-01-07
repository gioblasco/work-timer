import { useEffect } from "react";
import './CurrentStatus.css';

function CurrentStatus({isWorking, children}) {

    useEffect(() => {
        console.log(`[Status] ${isWorking ? "Working" : "Not Working"}`);
    }, [isWorking]);

    return (
        <div className="status-bar">
            { children }
            <h1 className={isWorking ? "working-text" : "regular-text"}>{ isWorking? "Trabalhando" : "Descansando" }</h1>
        </div>
    ) 
}

export default CurrentStatus;