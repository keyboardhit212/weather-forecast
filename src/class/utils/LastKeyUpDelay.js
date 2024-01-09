
export default class LastKeyUpDelay {

    #hasTyped = false;
    #delay = 1000;
    #timeoutHandler = null;
    #callbackFunction = () => {};

    constructor(callbackFunction) {
        this.#callbackFunction = callbackFunction;
    }

    start() {
        clearTimeout(this.#timeoutHandler);
        this.#timeoutHandler = setTimeout(this.#callbackFunction, this.#delay);
    }
}