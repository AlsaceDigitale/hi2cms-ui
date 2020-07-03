import axios from "axios";

let baseURL = process.env["VUE_APP_API_ROOT"] || "http://192.168.0.24:1337/";
let mediaURL = process.env["VUE_APP_MEDIA_ROOT"] || "";

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
        return HTTP.get("/processes?_sort=priority:ASC");
    },
    getResults: function () {
        return HTTP.get("/results?_sort=order:ASC");
    },
    getQuestions: function () {
        return HTTP.get("/questions?_sort=order:ASC");
    },
    getPartnerCategories: function () {
        return HTTP.get("/partnercategories?_sort=order:ASC");
    },
    getMaskableBlocks: function () {
        return HTTP.get("/maskableblocks");
    },
    getMenuBlocks: function () {
        return HTTP.get("/maskableblocks").filter(element => element.visible === true);
    },
    // getKeySteps: function () {
    //     return HTTP.get("/keysteps");
    // },
    getMediaRoot: function () {
        return mediaURL;
    }
};
