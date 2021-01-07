import { useDayCounter } from "../../../../customHooks/useDayCounter";

function TodayCounter({data = []}) {
    const {dayCounter = ""} = useDayCounter(data, 30);
    return (
      <h1>Hoje você trabalhou por: { dayCounter }</h1>
    );
}

export default TodayCounter;