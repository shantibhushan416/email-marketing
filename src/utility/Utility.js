export function setLocalStorageData(key,data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function getLocalStorageData(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  export function localStorageDataClear(key) {
    localStorage.clear(key);
  }