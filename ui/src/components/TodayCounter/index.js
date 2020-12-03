import { useTodayCounter } from "../../customHooks/useTodayCounter";

function TodayCounter() {
    const {todayCounter = []} = useTodayCounter();
    return (
      <h1>Hoje você trabalhou por: { todayCounter }</h1>
    );
}

export default TodayCounter;