
# Navigate to clonned folder and Install dependencies
yarn install

# Install Pods
cd ios && pod install
```


Run this command to start the development server and to start your app on iOS simulator:

yarn run:ios

yarn run:android



To reset cache:

react-native start --reset-cache

Alternative start:
npx react-native run-android


Run on physical device:

adb devices
 adb -s <device name> reverse tcp:8081 tcp:8081