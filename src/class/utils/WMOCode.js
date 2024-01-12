
export default class WMOCode {

    static getDescription(code) {
        switch(code) {
            case 0:
                return "Clear Sky";
            case 1:
                return "Mainly clear";
            case 2:
                return "Partly cloudy";
            case 3:
                return "Overcast";
            case 45:
                return "Fog";
            case 48:
                return "Depositing rime fog";
            case 51:
                return "Drizzle: Light";
            case 53:
                return "Drizzle: Moderate";
            case 55:
                return "Drizzle: Dense Intensity";
            case 56:
                return "Freezing Drizzle: Light";
            case 57:
                return "Freezing Drizzle: Dense Intensity";
            case 61:
                return "Rain: Slight";
            case 63:
                return "Rain: Moderate";
            case 65:
                return "Rain: Heavy Intensity";
            case 66:
                return "Freezing Rain: Light";
            case 67:
                return "Freezing Rain: Heavy Intensity";
            case 71:
                return "Snow Fall: Light";
            case 73:
                return "Snow Fall: Moderate";
            case 75:
                return "Snow Fall: Heavy Intensity";
            case 77:
                return "Snow grains";
            case 80:
                return "Rain Showers: Slight";
            case 81:
                return "Rain Showers: Moderate";
            case 82:
                return "Rain Showers: Violent";
            case 85:
                return "Snow Showers: Slight";
            case 86:
                return "Snow Showers: Heavy";
            case 95:
                return "Thunderstorm: Slight or Moderate";
            case 96:
            case 99:
                return "Thunderstorm with slight and heavy hail";
            default:
                return "Clear";
        }
    }
}