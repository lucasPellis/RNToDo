#  RNToDo (only iOS now)

Simple ToDo apps.

![README](README/app.png)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application `npm i`

## Firebase (only iOS)

**Step 1:** configure Bundle identifier on RNToDo.xcworkspace

**Step 2:** create Firebase project & donwload GoogleService-info.plist

**Step 3:** locate at ios/RNToDo/GoogleService-info.plist

**Step 4:** Activate service on Firebase Console (ex:Auth)

## How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `cd ios && pod install && cd ../`
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## Secrets (not yet used)

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!