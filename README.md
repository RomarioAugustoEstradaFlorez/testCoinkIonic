# Ionic5 TestCoink [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/romaestradaflo)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg)

This project works with [Angular CLI](https://github.com/angular/angular-cli) version ~9.1.5 and [IONIC](https://ionicframework.com/) version 5.0.0.

This application use the components, services, interfaces, containers and tabs. 

It shows one Register flow in four steps with sub-steps, in all the process the data is saved in storage and encrypted, at the end of the flow it decrypt the information and create the final json to consume the final service. 

It have a login too, same in the register, capture the IMEI of the phone if the user want.

In the register I create a keyboard from scratch using `ion-row`, `ion-grid` and `ion-button`. It works with two buttons, one to `drop by number` and the other one to the `ok function`. I choose that option because is better and it will be work in all the platforms that IONIC support.

The styles were created with SASS and with the metodology BEM to have a good structure and scalable elements.

The messages behaviour:

I create one service to provide `(normal, question, success, error, presentLoading, dismissLoading)` all of that functions work and can be use in every moment. 

The wifi behaviour:

I create a service to consume in the components that need to check if the wifi is working. It works with `Network from '@ionic-native/network/ngx'`.

It works with `AlertController, LoadingController from '@ionic/angular'` 

I used the next plugins as a dev dependencies: 

- `"cordova-plugin-whitelist": "1.3.3"`
- `"cordova-plugin-statusbar": "2.4.2"`
- `"cordova-plugin-splashscreen": "5.0.2"`
- `"cordova-plugin-ionic-webview": "^4.0.0"`
- `"cordova-plugin-ionic-keyboard": "^2.0.5"`

And the next ones for the dependencie of production:


- `"cordova-plugin-uid": "^1.3.0"`
- `"cordova-plugin-network-information": "^2.0.2"`
- `"cordova-plugin-android-permissions": "^1.0.2"`
- `"cordova-android": "8.1.0"`

Special thanks go to:
- [Romario Estrada](http://www.romaef.com) for his nice develop.


## Table of Contents

* [Languages](#versions)
* [DEMO](#demo)
* [Quick Start](#quick-start)
* [File Structure](#file-structure)
* [Platform Support](#platform-support)
* [Licensing](#licensing)


## Languages



| Ionic 5| Angular CLI 9|
| --- | --- |

## DEMO

You can see the demo working on this repository, you can find that on `/apk` folder only for `ANDROID` platforms, so if you liked, give me a star on this [Respossitory](https://github.com/RomarioAugustoEstradaFlorez/testCoinkIonic)

## Quick start

You have to install NODEJS, IONIC and CORDOVA in your computer to use the next commands.

Clone the repo: 

`git clone https://github.com/RomarioAugustoEstradaFlorez/testCoinkIonic`


The client in Angular will run at `port 8100` and the url to access is `http://localhost:8100` 

or you can specify the port with `--port 'your port'`.

To start the client:
- `cd /testCoinkIonic`
- `npm install`
- `ionic serve`

with another port

- `ionic serve --port 8800`

To compile the app in your phone, it have to be as a developer phone, it change depending the phone, so try to find how to config that in your phone:

- `ionic cordova run android`

or if you want to see the cganges i real time

- `ionic cordova run android --livereload`


## File Structure
Within the download you'll find the following directories and files:

```

├── client_angular/
|   ├── src/
|   |   ├── app/
|   |   |   ├── components/
|   |   |   |  ├── home/
|   |   |   |  └── login/
|   |   |   ├── container/
|   |   |   |  ├── explore/
|   |   |   |  └── infopig/
|   |   |   ├── interfaces/
|   |   |   |  ├── user-options.ts
|   |   |   |  ├── user-security.ts
|   |   |   |  └── user-v2.ts
|   |   |   ├── services/
|   |   |   |  ├── encrypt/
|   |   |   |  ├── imei/
|   |   |   |  ├── message/
|   |   |   |  ├── signup/
|   |   |   |  ├── storage/
|   |   |   |  └── wifi/
|   |   |   ├── tabs/
|   |   |   |   ├── account/
|   |   |   |   ├── authorization/
|   |   |   |   ├── number/
|   |   |   |   ├── security
|   |   |   ├── services/
|   |   |   ├── app-routing.module.ts
|   |   |   ├── app.component.html
|   |   |   ├── app.component.scss
|   |   |   ├── app.component.ts
|   |   |   └── app.module.ts
|   |   ├── assets/
|   |   ├── global.scss
|   |   └── index.html
└────── README.md
```


## Platform Support

At present, we officially aim to support the last two versions of the following browsers:


| Android| IOS| 
| --- | --- |

## Licensing

Licensed under MIT

##### Social Media
#
Web Page: <http://www.romaef.com>

Twitter: <https://twitter.com/romaestradaflo>

Facebook: <https://www.facebook.com/romaef/>

Instagram: <https://www.instagram.com/romaef_/>