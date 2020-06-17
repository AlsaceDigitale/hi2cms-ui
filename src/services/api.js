import axios from "axios";

let baseURL = process.env["VUE_APP_API_ROOT"] || "http://192.168.0.34:1337/";
let mediaURL = process.env["VUE_APP_MEDIA_ROOT"] || "http://192.168.0.34:1337";

export const HTTP = axios.create({
    baseURL: baseURL
});

export default {
    getKeynotes: function () {
        return HTTP.get("/keynotes?_sort=startTime:ASC");
    },
    getApiRoot: function () {
        return baseURL;
    },
    getProcessEnv: function () {
        return process.env;
    },
    getCoaches: function () {
        return HTTP.get("/coaches");
    },
    getJuries: function () {
        return HTTP.get("/juries");
    },
    getAnnounces: function () {
        return HTTP.get("/announces");
    },
    getProcesses: function () {
        return HTTP.get("/processes");
    },
    getMediaRoot: function () {
        return mediaURL;
    }   
};
