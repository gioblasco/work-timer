import { useTodayCounter } from "../../customHooks/useTodayCounter";

function TodayCounter() {
    const {content = []} = useTodayCounter();
    return (
        <>
          { content.map((item) => {
            return (  
            <>
                <p>{item.date}</p>
                <p>{item.begin}~{item.end}</p>
            </>)
          })}
        </>
    );
}

export default TodayCounter;