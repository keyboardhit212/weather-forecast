
export default class ForwardGeocode {

    API_KEY = '659cc1a327cbb583602310aptf02605';

    constructor() {
        this.address = '';
        this.link = `https://geocode.maps.co/search?q=${this.address}&api_key=${this.API_KEY}`;
    }

    #updateLink() {
        this.link = `https://geocode.maps.co/search?q=${this.address}&api_key=${this.API_KEY}`;
    }

    setLocation(location) {
        this.address = location;
        this.#updateLink();
        return this
    }

    async getResult() {
        const response = await fetch(this.link);
        return await response.json();
    }



}