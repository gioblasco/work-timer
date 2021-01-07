import React, { useEffect, useState } from 'react';
import useFetch from '../../customHooks/useFetch';
import Status from './components/CurrentStatus';
import SwitchButton from '../../components/SwitchButton';
import TodayCounter from './components/TodayCounter';
import moment from 'moment';

function getInitialState(data) {
  return data.some((period) => !period.finished);
}

async function saveNewPeriod(dateTime) {
  let newPeriod = {
    "date": dateTime.format("YYYY-MM-DD"),
    "begin": dateTime.format("HH:mm:ss"),
    "end": "23:59:59",
    "finished": false
  }

  return await fetch(process.env.REACT_APP_SERVER_URL,
  { 
    method: 'POST', 
    body: JSON.stringify(newPeriod),
    headers: {
        "Content-Type": "application/json"
    }
  })
  .then((response) => { return response.json(); })
  .then((json) => { console.log(`[saveNewPeriod] Saved period: ${JSON.stringify(json)}`); return { response: json, saved: true }})
  .catch((err) => { console.log(`[saveNewPeriod] exception was thrown when saving new period: ${err}`); return { response: null, saved: false } });
}

async function saveFinishedPeriod(todayData, currentTime) {
  let unfinishedOccurrence = todayData.find((occurrence) => occurrence !== null && !occurrence.finished);
  if (!!unfinishedOccurrence) {
    unfinishedOccurrence.finished = true;
    unfinishedOccurrence.end = currentTime;

    return await fetch(`${process.env.REACT_APP_SERVER_URL}/${unfinishedOccurrence.id}`,
    { 
      method: 'PUT', 
      body: JSON.stringify(unfinishedOccurrence),
      headers: {
          "Content-Type": "application/json"
      }
    })
    .then((response) => { return response.json() })
    .then((json) => { console.log(`[saveFinishedPeriod] Saved period: ${JSON.stringify(json)}`); return true;})
    .catch((err) => { console.log(`[saveFinishedPeriod] exception was thrown when saving new period: ${err}`); return false;})
  }

  return false;
}

const TodayInfo = () => {
    const [isWorking, setIsWorking] = useState(false);
    const [todayData, setTodayData] = useState([]);
    const {content} = useFetch(`${process.env.REACT_APP_SERVER_URL}?date=${moment().format("YYYY-MM-DD")}`, [], null);

    useEffect(() => {
      setIsWorking(getInitialState(content));
      setTodayData(content);
    }, [content]);

    async function onWorkStatusChange(status) {
      console.log(`[App] Received working status: ${status}`);

      let now = moment();
      if(!status) {
        let finishedPeriod = await saveFinishedPeriod(todayData, now.format("HH:mm:ss"));
        if (finishedPeriod) {
          setIsWorking(status);
        }
        return;
      }
      let newPeriod = await saveNewPeriod(now);
      if (newPeriod.saved) {
        setTodayData(oldTodayData => [...oldTodayData, newPeriod.response]);
        setIsWorking(status);
      }
    }

    return ( 
        <>
            <Status isWorking={isWorking}>
              <SwitchButton isOn={isWorking} changeSwitch={onWorkStatusChange} />
            </Status>
            <TodayCounter data={todayData} />
        </>
     );
}
 
export default TodayInfo;