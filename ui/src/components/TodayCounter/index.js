import { useDayCounter } from "../../customHooks/useDayCounter";

function TodayCounter({data = []}) {
    const {dayCounter = []} = useDayCounter(data);
    return (
      <h1>Hoje você trabalhou por: { dayCounter }</h1>
    );
}

export default TodayCounter;