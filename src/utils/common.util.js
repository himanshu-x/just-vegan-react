export function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function setLocalStorage(key, value) {
    if (typeof value === 'object') {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}

export function getLocalStorage(key) {
    const value = localStorage.getItem(key)
    if (isJson(value)) {
        return JSON.parse(value);
    } else {
        localStorage.getItem(key);
    }
}