/**
 * Copyright 2024 The Ground Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Change, EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/v1/firestore';
import {broadcastSurveyUpdate} from './common/broadcast-survey-update';

export async function onWriteJobHandler(
  _: Change<DocumentSnapshot>,
  context: EventContext
) {
  const surveyId = context.params.surveyId;

  return broadcastSurveyUpdate(surveyId);
}
