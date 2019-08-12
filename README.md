# Slack like chat system based on React

Chatsystem including channel structure, channel creation and post and get setup towards on API. 

![Screenshot](https://github.com/anszu/react_chat/blob/master/screenshots/screen.png?raw=true)

## Getting Started

1. Make sure Node.js and NPM are [installed](https://nodejs.org/en/download/) 
2. Make sure Git is [installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Clone Repo with ```git clone git@github.com:anszu/react_chat.git```
4. Install packages with ```npm install```
5. Edit [constants.js](https://github.com/anszu/react_chat/blob/master/src/components/App/constants.js) with API settings (see [here](https://github.com/anszu/react_chat#configuration))
6. Run with ```npm run start```

## Concept

This chat is using custom hooks for API requests and React Context for state management.

![Concept](https://github.com/anszu/react_chat/blob/master/screenshots/concept.png)

## Configuration

[**constants.js**](https://github.com/anszu/react_chat/blob/master/src/components/App/constants.js) holds global constants to define API related settings. It has to be filled to use with an API. 

Please be aware there is an expected structure for the REST API when using the API Parameters. If your API doesn't match this structure you have to adapt the calling components.

```javascript
// API Settings
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
export const API_ITEM_MESSAGES = ''; // eg. messageList
export const API_ITEM_CHANNELS = ''; // eg. channelList

// refresh settings
export const REFRESH_CHANNELS = 10000;
export const REFRESH_MESSAGES = 1000;
export const REFRESH_USERLIST = 1000;
```

## Context

React Context is used to transfer state between components.



## Hooks

All requests towards the API are done via Hooks.

### useGetAPI

[***useGetAPI.js***](https://github.com/anszu/react_chat/blob/master/src/components/App/Hooks/useGetAPI.js)  
Is controlling GET Requests for all calling components.

**Arguments:**
```javascript
const useGetAPI = (APIItem = '', APIParam = '', RefreshTime = false)

// (Optional)(String) Item/ Object that will be requested from the API 
// by Default the whole resultset is returned
APIItem 

// (Optional)(String) path to API ressource
APIParam

// (Optional)(String) if the GET call should be repeated, set the interval
RefreshTime
```

**Functions:**
```javascript
// call API and get result data
const callAPI = () => {
  fetch(`${CONST.API_GET_URL}/${APIParam}`, {
    headers: CONST.API_TOKEN
   })
  .then(res => res.json())
  .then((data) => {
    ...
  });
};
```

**Other:**
```javascript
// UseEffect hook, is called at every change of the API Parameter
useEffect(() => {
        
  // at first call, either set intervall or call API directly
  if (RefreshTime) {
    interval = setInterval(callAPI, RefreshTime);
  } else {
    callAPI();
  }

  // clear interval at unmount
  return () => {
    if (interval) { clearInterval(interval); }
  };
}, [APIParam]);
};
```

***Return values:***
```javascript
// (Object) contains requested data
values
```

### usePostAPI

[***usePostAPI.js***](https://github.com/anszu/react_chat/blob/master/src/components/App/Hooks/usePostAPI.js)  
Is controlling POST Requests for all calling components. Also controlls forms that are used for posting.

**Arguments:**
```javascript
const usePostAPI = (presetValues, ApiParam = '', callbackSubmit = false)

// (Optional)(Object) optional object for prefilling a form
presetValues

// (Optional)(String) path to API ressource
APIParam

// (Optional)(Function) if there is a non-default action required after posting, it can be set here
callbackSubmit
```

**Functions:**
```javascript

// handle click on form element
const handleClick = (event) => {
 ...
};

// handle change of form values
const handleChange = (event) => {
  ...
};

// handle submit of form and POST to API
const handleSubmit = (event) => {
  ...
  fetch(`${CONST.API_POST_URL}/${ApiParam}`, {
    method: 'POST',
    headers: CONST.API_HEADERS,
    body: JSON.stringify(values)
  })
  .then((res) => {
    ...
  });
};

// update a value manually by calling this function
const updateValue = (newValue, key) => {
  ...
};

// for non standart submit handling, call a callback
const handleSubmitWithCallback = (event) => {
  ...
};
```

***Return values:***
```javascript

// (Object) contains current form values
values

// (Function) see definition above
handleChange

// (Function) see definition above
handleSubmit

// (Function) see definition above
handleSubmitWithCallback

// (Function) see definition above
handleClick

// (Function) see definition above
updateValue

// (Integer) Status Code of Post request
result
```

## Components

For better readability the implemented React components are using a strict top down import hierarchy, meaning: 

```App``` imports ```Channels``` imports ```AddChannel/ ChannelItem/ AddUserName/ ChannelNavigation```  
```App``` imports ```Chat``` imports ```Content/ Message/ Input/ UserList```

There are no cross imports.

### App

### Channels
#### AddChannel
#### ChannelItem
#### AddUserName
#### ChannelNavigation

### Chat
#### Content
#### Message
#### Input
#### ChannelName
#### UserList

## Styling


