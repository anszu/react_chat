// api settings
export const API_POST_URL = '';
export const API_GET_URL = '';
export const API_TOKEN = {};
export const API_HEADERS = {
    'Content-Type': 'application/json',
    ...API_TOKEN
};

// API Params
// expected format: API_PARAM_CHANNELS/ChannelId
export const API_PARAM_CHANNELS = 'channels';
// expected format: API_PARAM_CHANNELS/ChannelId/API_PARAM_MESSAGES
export const API_PARAM_MESSAGES = 'messages';
// expected format: API_PARAM_CHANNELS/ChannelId/API_PARAM_USERS
export const API_PARAM_USERS = 'users';

// API Items
// name of expected API Objects
export const API_ITEM_MESSAGES = 'messageList';
export const API_ITEM_CHANNELS = 'channelList';

// refresh settings
export const REFRESH_CHANNELS = 10000;
export const REFRESH_MESSAGES = 1000;
export const REFRESH_USERLIST = 1000;
