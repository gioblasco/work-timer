import { useEffect, useState } from "react";
import sumOccurrenceTime from "../globalFunctions/sumOccurrenceTime";
import msToFormattedTime from "../globalFunctions/msToFormattedTime";
import useFetch from "./useFetch";
import moment from 'moment';

export const useTodayCounter = () => {
    const {content} = useFetch(`http://localhost:3000/history?date=${moment().format("YYYY-MM-DD")}`, [], 30000);
    const [todayCounter, setTodayCounter] = useState("0h");

    useEffect(() => {
        const countHoursForToday = () => {
            console.log('[useTodayCounter] calculating today hours');
            let datetime = moment();
            let todayCount = content
                            .reduce((total, occurrence) => {
                                return total + sumOccurrenceTime(datetime, occurrence);
                            }, 0);

            setTodayCounter(msToFormattedTime(todayCount));
        }
        countHoursForToday();
    }, [content]);

    return { todayCounter };
};

export default useTodayCounter;
