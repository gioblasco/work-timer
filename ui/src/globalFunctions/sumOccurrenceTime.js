import moment from 'moment';

const sumOccurrenceTime = (now, occurrence) => {
    let currentDate = now.format("YYYY-MM-DD");
    let begin = moment(`${currentDate} ${occurrence.begin}`);
    if (occurrence.finished) {
        let end = moment(`${currentDate} ${occurrence.end}`);
        return Math.abs(end - begin);
    }
    return Math.abs(now - begin);
}
 
export default sumOccurrenceTime;