
export default class DateTime {

    #date = null;
    #token = null;


    constructor(datetime) {
        this.#date = new Date(datetime);
        this.#token = this.#date.toUTCString().split(" ");
    }

    getNameOfDay() {
        return this.#convertDayName(this.#token[0].slice(0, -1));
    }

    getDay() {
        return Number(this.#token[1]).toString();
    }

    getMonth() {
        return this.#convertMonthName(this.#token[2]);
    }

    getYear() {
        return this.#token[3];
    }

    getTime() {
        return this.#date.toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    #convertDayName(name) {
        switch(name) {
            case "Sun":
                return "Sunday";
            case "Mon":
                return "Monday";
            case "Tue":
                return "Tuesday";
            case "Wed":
                return "Wednesday";
            case "Thu":
                return "Thursday";
            case "Fri":
                return "Friday";
            case "Sat":
                return "Saturday";
            default:
                return "Sunday";
        }
    }

    #convertMonthName(name) {
        switch(name) {
            case "Jan":
                return "January";
            case "Feb":
                return "February";
            case "Mar":
                return "March";
            case "Apr":
                return "April";
            case "May":
                return "May";
            case "Jun":
                return "June";
            case "Jul":
                return "July";
            case "Aug":
                return "August";
            case "Sep":
                return "September";
            case "Oct":
                return "October";
            case "Nov":
                return "November";
            case "Dec":
                return "December";
            default:
                return "January";
        }
    }
}