// your API settings here
export const API_POST_URL = 'http://34.243.3.31:8080';
export const API_GET_URL = 'http://34.243.3.31:8080';
export const API_TOKEN = { 'X-Group-Token': '' };
export const API_HEADERS = {
    'Content-Type': 'application/json',
    ...API_TOKEN
};
export const REFRESH_CHANNELS = 10000;
export const REFRESH_MESSAGES = 1000;
export const REFRESH_USERLIST = 1000;
