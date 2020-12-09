import { useEffect } from "react";
import './Status.css';

function Status({isWorking, children}) {

    useEffect(() => {
        console.log(`[Status] ${isWorking ? "Working" : "Not Working"}`);
    }, [isWorking]);

    return (
        <div className="status-bar">
            <h1 className="regular-text">Descansando</h1> 
                { children }
            <h1 className={isWorking ? "working-text" : "regular-text"}>Trabalhando</h1>
        </div>
    )
}

export default Status;