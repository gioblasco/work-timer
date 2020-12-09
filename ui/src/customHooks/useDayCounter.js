import { useEffect, useState } from "react";
import sumOccurrenceTime from "../globalFunctions/sumOccurrenceTime";
import msToTime from "../globalFunctions/msToTime";
import moment from 'moment';

export const useDayCounter = (data) => {
    const [dayCounter, setDayCounter] = useState("0h");

    useEffect(() => {
        const countHoursForDay = () => {
            console.log('[useDayCounter] calculating today hours');
            console.log(`[useDayCounter] data: ${JSON.stringify(data)}`)
            let datetime = moment();
            let todayCount = data
                            .reduce((total, occurrence) => {
                                return total + sumOccurrenceTime(datetime, occurrence);
                            }, 0);

            setDayCounter(msToTime(todayCount).formatted);
        }
        countHoursForDay();
        let interval = setInterval(() => countHoursForDay(), 30000);

        return () => {
            clearInterval(interval);
        }
    });

    return { dayCounter };
};

export default useDayCounter;
