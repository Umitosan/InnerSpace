# _InnerSpace_

#### By _**Dominic Brown**_

## Description

Description

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* (for sass) Ruby and the sass gem `$ gem install sass`

## Installation

* (using OSX terminal, or Gitbash on Windows)
* `git clone`
* `cd hack-anon`
* `npm install`
* `bower install`

## Firebase setup

* Create a new database of your own using your firebase console [https://console.firebase.google.com](https://console.firebase.google.com)
* name the database 'hack-anon' just like the project
* Create a api-keys file here: (app-root-folder)/src/app/api-keys.ts
* fill the file with your database credentials by copying and pasting the info from the console / Overview / 'Add Firebase to your web app' button
* here's an example, be sure to use the var name 'masterFirebaseConfig'
```typescript
export var masterFirebaseConfig = {
  apiKey: "fFESDFioDS&FYsdf&EFS7834kdfjDH",
  authDomain: "inner-space.firebaseapp.com",
  databaseURL: "https://hack-anon.firebaseio.com",
  projectId: "hack-anon",
  storageBucket: "hack-anon.appspot.com",
  messagingSenderId: "483748704371"
};
```

### Build & Run

* a browser window should open showing the app, otherwise...
* Point your browser to [http://localhost:4200](http://localhost:4200).

## Known Bugs
_N/A_

## Technologies Used
 * Angular2
 * Firebase
 * Typescript
 * JavaScript
 * ES6
 * Node
 * Bower
 * CSS
 * Bootstrap
 * HTML

 ### License
 *This software is licensed under the MIT license*
 Copyright © 2017 **Dominic Brown**
