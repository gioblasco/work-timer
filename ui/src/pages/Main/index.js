import React, { useEffect, useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import Status from '../../components/Status';
import SwitchButton from '../../components/SwitchButton';
import TodayCounter from '../../components/TodayCounter';
import moment from 'moment';

function getInitialState(data) {
  return data.some((period) => !period.finished);
}

async function saveNewPeriod(todayData, dateTime) {
  let newPeriod = {
    "date": dateTime.format("YYYY-MM-DD"),
    "begin": dateTime.format("HH:mm:ss"),
    "end": "23:59:59",
    "finished": false
  }

  await fetch(`http://localhost:3000/history/`,
  { 
    method: 'POST', 
    body: JSON.stringify(newPeriod),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then((response) => { response.json() })
  .then((json) => { return json; })
  .catch((err) => { return null; });
}

function saveFinishedPeriod(todayData, currentTime) {
  let unfinishedOccurrence = todayData.find((occurrence) => !occurrence.finished);
  if (!!unfinishedOccurrence) {
    unfinishedOccurrence.finished = true;
    unfinishedOccurrence.end = currentTime;
    fetch(`http://localhost:3000/history/${unfinishedOccurrence.id}`,
    { 
      method: 'PUT', 
      body: JSON.stringify(unfinishedOccurrence),
      headers: {
          "Content-Type": "application/json"
      }
    });
    //TODO: Change isWorking and today data state only after PUT was successful
  }
}

const Main = () => {
    const [isWorking, setIsWorking] = useState(false);
    const [todayData, setTodayData] = useState([]);
    const {content} = useFetch(`http://localhost:3000/history?date=${moment().format("YYYY-MM-DD")}`, [], null);

    useEffect(() => {
      setIsWorking(getInitialState(content));
      setTodayData(content);
    }, [content]);

    async function onWorkStatusChange(status) {
      console.log(`[App] Received working status: ${status}`);
      setIsWorking(status);

      let now = moment();
      if(!status) {
        saveFinishedPeriod(todayData, now.format("HH:mm:ss"));
        return;
      }
      let newPeriod = await saveNewPeriod(todayData, now);
      // TODO: Check if saved new period is actually valid before updating today data and isWorking
      setTodayData(oldTodayData => [...oldTodayData, newPeriod]);
    }

    return ( 
        <>
            <Status isWorking={isWorking} />
            <SwitchButton isOn={isWorking} changeSwitch={onWorkStatusChange} />
            <TodayCounter />
        </>
     );
}
 
export default Main;