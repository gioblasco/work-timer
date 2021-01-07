import moment from 'moment';

const msToTime = (ms) => {
    let duration = moment.duration(ms, 'milliseconds');
    let formatted = `${Math.floor(duration.asHours().toString().padStart(2, '0'))}h${duration.minutes().toString().padStart(2, '0')}m`;
    return { duration, formatted };
}

export default msToTime;