/**
 * Copyright 2019 The Ground Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Env } from 'environments/environment-enums';
import { FirebaseOptions } from '@angular/fire/app';

// Replace with production values for your hosted environment.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyDD6iGVMf0Ek31I5ygQeiebQiDIvntYRxs',
  authDomain: 'of-ground.firebaseapp.com',
  projectId: 'of-ground',
  storageBucket: 'of-ground.appspot.com',
  messagingSenderId: '742909325672',
  appId: '1:742909325672:web:c9243daa3d4bee0418e6dd',
  measurementId: 'G-FC8YH2FPYB',
};


export const environment = {
  production: true,
  googleMapsApiKey: firebaseConfig.apiKey,
  firebase: firebaseConfig,
  cloudFunctionsUrl: `https://${firebaseConfig.projectId}.web.app`,
  useEmulators: false,
  env: Env.Prod,
};
