const formatSatDate = (day: any, month: any, year: any) => {
    let d = day.toString();
    let m = month.toString();
    if (day < 10) {
        d = '0' + day;
    }
    if (month < 10) {
        m = '0' + month;
    }
    return year.toString() + "-" + m + "-" + d;
}

const isDateTimeValid = (start: string, end: string) => {
    const startDateTime = Date.parse(start);
    const endDateTime = Date.parse(end);
    return startDateTime < endDateTime;
}
const adjustDatePlusOne = (dateVal: string, dateVAR: any) => {
    const timestamp = Date.parse(dateVal);
    let rawDate = new Date(timestamp);
    let day = rawDate.getDay() + 1;
    let month = rawDate.getMonth() + 1;
    let year = rawDate.getFullYear();
    return formatSatDate(day, month, year);

}
const adjustDateMinusOne = (dateVal: string, dateVAR: any) => {

}

