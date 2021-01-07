import moment from 'moment';

const sumOccurrenceTime = (date, occurrence) => {
    let currentDate = date.format("YYYY-MM-DD");
    let begin = moment(`${currentDate} ${occurrence.begin}`);
    if (occurrence.finished || occurrence.date !== currentDate) {
        let end = moment(`${currentDate} ${occurrence.end}`);
        return Math.abs(end - begin);
    }
    return Math.abs(date - begin);
}
 
export default sumOccurrenceTime;