export class DateTime{
    #date;

    constructor(date: Date = new Date()) {
        const parsedDate : Date = date instanceof Date ? new Date(date);
        if (isNaN(parsedDate.getTime())) {
            throw new Error(`Invalid date: ${date}`);
        }
        this.#date = new Date(parsedDate);
        Object.freeze(this);
    }

    get date(): Date {
        return new Date(this.#date.getTime());
    }

    toISOString() {
        return this.#date.toISOString();
    }

    toString() {
        let options   = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true};
        return this.#date.toLocaleString('en-US', options);}
    }

    /**
     *Checks if this DateTime instance is equal to another DateTime instance.
        * @param {DateTime} other - The other DateTime instance to compare with.
        * @returns {boolean} - True if the two instances represent the same date and time, false otherwise.
        */
    equals(other: DateTime): boolean {
    return other instanceof DateTime && this.#date.getTime() === other.#date.getTime();
        }
    }