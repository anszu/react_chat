# Slack like chat system based on React

Chatsystem including channel structure, channel creation and post and get setup towards on API. This application is using React Hooks for controlling forms and API actions and React Context for shared states. To demonstrate the differences between React Context and Redux please have a look at the [react_chat_redux](https://github.com/anszu/react_chat_redux) fork. It is using Redux for state management and compares the two versions in it's Readme.

![Screenshot](https://github.com/anszu/react_chat/blob/master/screenshots/screen.png?raw=true)

## Getting Started

1. Make sure Node.js and NPM are [installed](https://nodejs.org/en/download/) 
2. Make sure Git is [installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Make sure a [json-server](https://github.com/typicode/json-server) is installed, to simulate a REST API
4. Clone Repo with ```git clone git@github.com:anszu/react_chat.git```
5. Install packages with ```npm install```
6. Go to the root folder of this repository and run ```json-server --watch db.json``` to start the REST API
7. Run with ```npm run start```
8. If you want you can modify [constants.js](https://github.com/anszu/react_chat/blob/master/src/components/App/constants.js) with alternative API settings if you would like to use a real API (see [here](https://github.com/anszu/react_chat#configuration)). If you are running the Json Server at another port than 3000, you also have to modify the settings.

## Concept

This chat is using custom React Hooks for API requests and React Context for state management. Please see [react_chat_redux](https://github.com/anszu/react_chat_redux) for a version using Redux.

![Concept](https://github.com/anszu/react_chat/blob/master/screenshots/concept.png)

* Please note that the UserList and ChannelNavigation components got deleted since moving to a fake API solution

## Configuration

[**constants.js**](https://github.com/anszu/react_chat/blob/master/src/components/App/constants.js) holds global constants to define API related settings, wordings and refresh intervalls. It was prefilled to be used with a faked REST API. 
You can find the data for this API in [db.json](https://github.com/anszu/react_chat/blob/master/db.json).

Please be aware there is an expected structure for the REST API when using the API Parameters. If your API doesn't match this structure you have to adapt the calling components.

```javascript
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
```

## Context

React Context is used to transfer state between components.

Context objects are created in [src/components/App/AppContext.js](https://github.com/anszu/react_chat/edit/master/src/components/App/AppContext.js):
```javascript
// create context objects
export const AppContext = React.createContext({});
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
```

The ```App``` component is importing ```AppContextProvider``` to pass down ```channelId```, ```userName```and ```changeChannelInfo()``` to it's sub components.

```javascript
import { AppContextProvider } from './AppContext';

const App = () => {
    // define states
    const [channelId, setChannelId] = useState(1);
    const [userName, setUserName] = useState('guest');

    // reset state for channel id and username
    const changeChannelInfo = (channelId, userName) => {
        setChannelId(channelId);
        setUserName(userName);
    };

    // call subcomponents with context provider
    return (
        <div className="App">
            <AppContextProvider value={{
                channelId: channelId,
                userName: userName,
                changeChannelInfo: changeChannelInfo }}>
                <Channels/>
                <Chat/>
            </AppContextProvider>
        </div>
    );
};
```

Context data is accessed by the sub components via the useContext Hook.  
Example usage in [src/components/App/Chat/Input.js](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/Input.js):

```javascript
const Input = () => {
    // get channel id and username from context and call post hook
    const { channelId, userName } = useContext(AppContext);
    ...
}
```

## Hooks

All requests towards the API are done via Hooks.

### useGetAPI

[***useGetAPI.js***](https://github.com/anszu/react_chat/blob/master/src/components/App/Hooks/useGetAPI.js)  
Is controlling GET Requests for all calling components.

**Arguments:**
```javascript
const useGetAPI = (apiParam = '', refreshTime = false)

// (Optional)(String) path to API ressource
apiParam

// (Optional)(String) if the GET call should be repeated, set the interval
refreshTime
```

**Functions:**
```javascript
// call API and get result data
const callAPI = () => {
  fetch(`${CONST.API_GET_URL}/${apiParam}`, {
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
  if (refreshTime) {
    interval = setInterval(callAPI, RefreshTime);
  } else {
    callAPI();
  }

  // clear interval at unmount
  return () => {
    if (interval) { clearInterval(interval); }
  };
}, [apiParam]);
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
const usePostAPI = (apiParam = '', presetValues = {})

// (Optional)(String) path to API ressource
apiParam

// (Optional)(Object) optional object for prefilling a form
presetValues
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
  fetch(`${CONST.API_POST_URL}/${apiParam}`, {
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
handleClick

// (Function) see definition above
updateValue

// (Integer) Status Code of Post request
result
```

## Components

For better readability the implemented React components are using a strict top down import hierarchy, meaning: 

```App``` imports ```Channels``` imports ```AddChannel/ ChannelItem/ AddUserName```  
```App``` imports ```Chat``` imports ```Content/ Message/ Input```

There are no cross imports.

 **Component Overview:**

[App](https://github.com/anszu/react_chat/blob/master/src/components/App/index.js)  

--- [Channels](https://github.com/anszu/react_chat/blob/master/src/components/App/Channels/index.js)   
------ [AddChannel](https://github.com/anszu/react_chat/blob/master/src/components/App/Channels/AddChannel.js)  
------ [ChannelItem](https://github.com/anszu/react_chat/blob/master/src/components/App/Channels/ChannelItem.js)
------ [AddUserName](https://github.com/anszu/react_chat/blob/master/src/components/App/Channels/AddUserName.js) 
 
--- [Chat](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/index.js)  
------ [Content](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/Content.js)  
------ [Message](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/Message.js)  
------ [Input](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/Input.js)  
------ [ChannelName](https://github.com/anszu/react_chat/blob/master/src/components/App/Chat/ChannelName.js)

## Styling

Styling is done via simple SCSS imports and should be changed to JSS usage in the future. SCSS files are stored in a _styles_ folder next to the compontents.
