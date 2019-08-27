// API Settings
export const API_POST_URL = 'http://localhost:3000';
export const API_GET_URL = 'http://localhost:3000';
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

// Wordings
// new channel
export const NEW_CHANNEL_NAME_INPUT = 'Name';
export const NEW_CHANNEL_TOPIC_INPUT = 'Thema';
export const NEW_CHANNEL_SUCCESS = 'Angelegt!';
export const NEW_CHANNEL_ERROR = 'Fehler!';
export const NEW_CHANNEL_INPUT = 'Neuer Channel: ';

// username
export const DISPLAY_USERNAME = 'eingeloggt als ';
export const CHANGE_USERNAME = 'Usernamen ändern:';

// message input button
export const BUTTON_MESSAGE_INPUT = 'Absenden';

// refresh settings
export const REFRESH_CHANNELS = 10000;
export const REFRESH_MESSAGES = 1000;
