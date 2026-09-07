export class PurchaseOrderId {
    #value;

    constructor(value) {
        if (!validateUuid(value)) {
            throw new ERROR('Invalied PurchaseOrderId: ${value}. Must be a valid UUID.');
        }
        this.#value = value;
        Object.freeze(this);
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof PurchaseOrderId && this.#value === other.#value;
    }

    toString() {
        return this.#value;
    }
}