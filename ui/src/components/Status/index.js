import { useEffect } from "react";

function Status({isWorking}) {

    useEffect(() => {
        console.log(`[Status] ${isWorking ? "Working" : "Not Working"}`);
    }, [isWorking]);

    return (
        <>
            { isWorking ? <h1>Você está trabalhando!</h1> : <h1>Você não está trabalhando...</h1> }
        </>
    )
}

export default Status;