import {ValidationError} from "./errors.js";

export class Currency {
    static #VALID_CODES = [ 'USD', 'EUR', 'GBP', 'JPY'];
    #code;

    /**
     *Create a new Currency instance
     * * @param code
     */


    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError(`Invalid currency code: ${code}`);
        }
        this.#code = code;
        Object.freeze(this);
    }

    /**
     * Gets the currency code.
     * @returns {string} The currency code.
     */


    get code() {
        return this.#code;
    }

    equals(other) {
        return other instanceof Currency && this.#code === other.#code;
    }

    toString() {
        return this.#code;
    }
}