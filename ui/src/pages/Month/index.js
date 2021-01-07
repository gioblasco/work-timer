import { useEffect, useState } from "react";
import moment from 'moment';
import useFetch from "../../customHooks/useFetch";
import useMonthCounter from "../../customHooks/useMonthCounter";

const Month = () => {
    const {content = []} = useFetch(`${process.env.REACT_APP_SERVER_URL}?date_like=${moment().format("YYYY-MM")}-\\d{2}`, [], null);
    // const {content = []} = useFetch(`${process.env.REACT_APP_SERVER_URL}?date_like=2020-12-\\d{2}`, [], null);
    const {monthCounter = "", monthCounterMs = 0} = useMonthCounter(content, 30);
    // TODO: Calcular horas esperadas do mês
    // Considerar apenas dias úteis e desconsiderar férias
    // TODO: Adicionar input de mês
    // TODO: Adicionar input de range de férias para ser descontado do mês atual

    return (
        <>
            <h1>Horas trabalhadas: {monthCounter}</h1>
            <h1>Horas esperadas: </h1>
        </>
    );
}
 
export default Month;