export class Supplier {
    #id;
    #name;
    #contactEmail;
    #lastOrderTotalPrice;

    constructor({id, name, contactEmail = null, lastOrderTotalPrice = null}) {
        if (!id instanceof SupplierId) {
            throw new ValidationError("Supplier ID must be an instance of SupplierId.");
        }
    }

    #isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    changeName(newName) {
        if (typeof newName !== 'string' || newName.length < 2 || newName.length > 100) {
            throw new ValidationError("Supplier name must be a non-empty string.");
        }
        this.#contactEmail = newEmail;
    }

    recordOrder(orderTotal) {
        if (typeof orderTotal !== 'number' || orderTotal < 0) {
            throw new ValidationError("Order total must be a non-negative number.");
        }
        this.#lastOrderTotalPrice = orderTotal;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get contactEmail() {
        return this.#contactEmail;
    }

    get lastOrderTotalPrice() {
        return this.#lastOrderTotalPrice;
    }
}
