import axios from "axios";

let baseURL = process.env["VUE_APP_API_ROOT"] || "http://192.168.0.24:1337/";

export const HTTP = axios.create({
    baseURL: baseURL
});

export default {
    getKeynotes: function () {
        return HTTP.get("/keynotes");
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
    }
};
