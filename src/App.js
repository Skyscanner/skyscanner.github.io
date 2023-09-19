/**
 * Copyright 2021 Skyscanner Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import Header from './Header/Header';
import Section from './Section/Section';
import content from './content';
import STYLES from './App.scss';

const c = cssModules(STYLES);

const App = () => (
  <div className={c('App')}>
    <Header />
    <main className={c('App__main')}>
      {content.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          content={section.content}
        />
      ))}
    </main>
  </div>
);

export default App;
