export class Money {
    #amount;
    #currency;

    constructor(amount, currency) {
        if (!Number.isFinite(amount)) || amount < 0) {
            throw new ValidationError(`Invalid amount: ${amount}. Must be a positive number.`);
        }
    }
}



add(other)
{
    if (!(other instanceof Money) || this.#currency(other.currency)) {
        throw new ValidationError(`Invalid argument: ${other}. Must be an instance of Money.`);
    }


    toString()
    {
        return `${this.#amount.toFixed(2)} ${this.#currency.code}`;
    }

    equals(other)
    {
        return (other instanceof Money &&
            this.#amount === other.amount &&
            this.#currency.equals(other.currency));
    }
    ;

}