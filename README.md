# To Create New Cordova Project


Open Command Prompt :computer:
==================
- [x] **window + R**
- [ ] *type* **cmd**
- [ ] *hit* **enter**


Create Project
==============
```
cordova create <ENTER_APPLICATION_NAME_HERE> <ENTER_APPLICATION_PACKAGE_HERE> <ENTER_APPLICATION_NAME_HERE>
```


Change Directory
================
```
cd <ENTER_APPLICATION_NAME_HERE>
```


Add Required Plugins(s) :exclamation:
=======================
```
cordova plugin add cordova-plugin-device
cordova plugin add cordova-plugin-datepicker (ios)
cordova plugin add cordova-plugin-datetimepicker (android)
cordova plugin add cordova-plugin-apprate
cordova plugin add cordova-plugin-dialogs
cordova plugin add cordova-plugin-network-information
cordova plugin add cordova-plugin-pdialog (android)
cordova plugin add cordova-plugin-x-socialsharing
cordova plugin add cordova-plugin-x-toast
cordova plugin add cordova-plugin-file
cordova plugin add cordova-plugin-file-opener2
cordova plugin add cordova-plugin-file-transfer
cordova plugin add cordova-plugin-decimal-keyboard (ios)
cordova plugin add cordova-plugin-contacts
cordova plugin add com-sarriaroman-photoviewer
cordova plugin add cordova-plugin-document-viewer (ios)
cordova plugin add com.razorpay.cordova@1.4.3 --save
cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="669784233533687" --variable APP_NAME="iHealthPay-Patient"
```
> *some plugins may not be compatible with android7+*


Cordova plugin Razor pay for ios (version 1.4.5)
================================================

- Always Embed Swift Standard Libraries of your main target to yes.  (Build setting Tab)
- Enable bitcode on both your iOS project. (Build setting Tab)
- Add RazorPay.framework in Embedded Binaries section (General Tab)
- Replace  ```#import <Razorpay/Razorpay.h>```  with  ``` #import <Razorpay/Razorpay-Swift.h>```


Add Platform(s)
==============
```
cordova platform add browser
cordova platform add android
```

Add Plugin Using Bonobo(s)
==========================
```
cordova plugin add git+http://<SERVER_URL>/<REPOSITORY_NAME>.git
```

Sample Config file
=====================
```xml
<?xml version='1.0' encoding='utf-8'?>
<widget id="<ENTER_APPLICATION_PACKAGE_HERE>" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name><ENTER_APPLICATION_NAME_HERE></name>
    <description>
        <ENTER_SOME_DESCRIPTION_ABOUT_APPLICATION_HERE>
    </description>
    <author email="<ENTER_APPLICATION_AUTHOR_EMAIL_ADDRESS_HERE>" href="<ENTER_URL_OF_WEB_VERSION_OF_YOUR_APPLICATION_HERE>">
        <ENTER_APPLICATION_AUTHORS>
    </author>
    <content src="index.html" />
    <preference name="android-minSdkVersion" value="19" />
    <preference name="android-targetSdkVersion" value="26" />
    <preference name="iosPersistentFileLocation" value="Library" />
    <preference name="iosPersistentFileLocation" value="Compatibility" />
    <preference name="DisallowOverscroll" value="true" />
    <preference name="orientation" value="portrait" />
    <preference name="StatusBarOverlaysWebView" value="false" />
    <preference name="StatusBarBackgroundColor" value="#000000" />
    <preference name="StatusBarStyle" value="lightcontent" />
    <preference name="ShowSplashScreenSpinner" value="false" />
    <preference name="KeyboardDisplayRequiresUserAction" value="false" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <platform name="android">
        <allow-intent href="market:*" />
        <resource-file src="google-services.json" target="google-services.json" />
        <resource-file src="google-services.json" target="app/google-services.json" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
    <platform name="android">
        <icon density="ldpi" src="res/icon/android/drawable-ldpi-icon.png" />
        <icon density="mdpi" src="res/icon/android/drawable-mdpi-icon.png" />
        <icon density="hdpi" src="res/icon/android/drawable-hdpi-icon.png" />
        <icon density="xhdpi" src="res/icon/android/drawable-xhdpi-icon.png" />
        <icon density="xxhdpi" src="res/icon/android/drawable-xxhdpi-icon.png" />
        <icon density="xxxhdpi" src="res/icon/android/drawable-xxxhdpi-icon.png" />
    </platform>
</widget>

```


Sample Package.json file
=========================
```json
{
  "devDependencies": {
    "cordova-plugin-device": "^2.0.2"
  },
  "cordova": {
    "plugins": {
      "cordova-plugin-device": {}
    },
    "platforms": [
      "browser"
    ]
  },
  "dependencies": {
    "cordova-plugin-device": "^2.0.2",
  }
}

```


Keyboard focus event error (iOS)
============================================
- Add line in ```config.xml```
 ```xml
  <preference name="KeyboardDisplayRequiresUserAction" value="false" />
  ```
 
Webservices call error (Android 8+)
============================================
- Add a piece of code in ```AndroidManifest.xml``` inside ```xml <application ../> ``` tag
 ```xml
    <application android:usesCleartextTraffic="true"  ....... />
  ```
- Or we can edit ```config.xml``` file
```xml
    <platform name="android">
        <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application">
            <application android:usesCleartextTraffic="true" />
        </edit-config>
    </platform>
```
    
    
  
