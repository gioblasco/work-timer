import { useEffect, useState } from "react";
import sumOccurrenceTime from "../globalFunctions/sumOccurrenceTime";
import msToTime from "../globalFunctions/msToTime";
import moment from 'moment';

export const useMonthCounter = (data, refreshSeconds) => {
    const [monthCounter, setMonthCounter] = useState("0h");
    const [monthCounterMs, setMonthCounterMs] = useState(0);

    useEffect(() => {
        const countHoursForMonth = () => {
            console.log('[useMonthCounter] calculating month hours');
            console.log(`[useMonthCounter] data: ${JSON.stringify(data)}`)
            let monthCount = data
                            .reduce((total, occurrence) => {
                                return total + sumOccurrenceTime(moment(occurrence.data), occurrence);
                            }, 0);

            console.log(`month count in ms: ${monthCount}`)
            setMonthCounter(msToTime(monthCount).formatted);
            setMonthCounterMs(monthCounter);
        }

        let interval = null;
        if (data !== []) {
            countHoursForMonth();

            if (!!refreshSeconds) {
                console.log(`[useMonthCounter] should refresh after ${refreshSeconds} s`)
                interval = setInterval(() => countHoursForMonth(), refreshSeconds * 1000);
            }
        }

        return () => {
            clearInterval(interval);
        }
    });

    return { monthCounter, monthCounterMs };
};

export default useMonthCounter;