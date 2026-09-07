import {ValidationError} from "./errors.js";

export class SupplierId {
    if (!value) {
        throw new ValidationError("Invalid supplier ID: ${value}. Must be a non-empty string.")
    }
    this.#value = value;
    Object.freeze(this);
}

static generate() {
    return new SupplierId(generateUuid());
}

get value() {
    return this.#value;
}

toString() {
    return this.#value;
}

equals(other) {
    return other instanceof SupplierId && this.#value === other.#value;
}