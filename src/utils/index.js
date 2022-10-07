const electron = window.require('electron');
const {
    ipcRenderer,
} = electron;

import { useUserStore, useConfigStore, useTemplateStore, useCompetitionStore } from "@/store";
import { electronStore } from "@/electron-store";
export function getData() {

}

/**
 * 
 * @param {String} file 
 * @param {Function} callback 
 */
export function readJSONFile(file, callback) {
    ipcRenderer.send("readJSONFile", file);
    ipcRenderer.once("readJSONFile-reply", function (event, data) {
        if (callback && typeof callback === "function") {
            callback(data);
        }
    });
}

/**
 * 
 * @param {String} file 
 * @param {String} data 
 * @param {Function} callback 
 */
export function writeJSONFile(file, data, callback) {
    ipcRenderer.send("writeJSONFile", { file, data: JSON.stringify(data, null, 4) });
    ipcRenderer.once("writeJSONFile-reply", function (event, data) {
        if (callback && typeof callback === "function") {
            callback(data);
        }
    });
}

/**
 * 
 * @param {String} str 
 * @returns 
 */
export function Uppercase(str) {
    return str.replace(/\b([\w|']+)\b/g, (word) => {
        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    });
}

export function getElectronStore() {
    useUserStore().$state = electronStore.get('user');
    useConfigStore().$state = electronStore.get('config');
    useTemplateStore().$state = electronStore.get('template');
    useCompetitionStore().$state = electronStore.get('competition');
}


// export function readConfig(projectPath) {
    
// }