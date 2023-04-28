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

import BpkText, {
  TEXT_STYLES,
} from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';
import BpkBreakpoint, {
  BREAKPOINTS,
} from '@skyscanner/backpack-web/bpk-component-breakpoint';
import { BpkContentBubble } from '@skyscanner/backpack-web/bpk-component-flare';

import STYLES from './Header.scss';

const c = cssModules(STYLES);

const TITLE_TEXT = `Open Source at Skyscanner`;

const content = (
  <div>
    <a href="https://skyscanner.net" className={c('Header__logo')}>
      <img
        src="https://content.skyscnr.com/m/3230a6e7077dfab/original/Skyscanner_Logo_LockupHorizontal_White_RGB.svg"
        alt="Skyscanner"
      />
    </a>

    <div className={c('Header__inner')}>
      <BpkBreakpoint query={BREAKPOINTS.ABOVE_MOBILE}>
        <BpkText
          tagName="h1"
          textStyle={TEXT_STYLES.xxl}
          className={c('Header__heading')}
        >
          {TITLE_TEXT}
        </BpkText>
      </BpkBreakpoint>

      <BpkBreakpoint query={BREAKPOINTS.MOBILE}>
        <BpkText
          tagName="h1"
          textStyle={TEXT_STYLES.heading3}
          className={c('Header__heading')}
        >
          {TITLE_TEXT}
        </BpkText>
      </BpkBreakpoint>
    </div>
  </div>
);

const Header = () => (
  <header className={c('Header__wrapper')}>
    <BpkContentBubble
      className={c('Header__flare')}
      rounded={false}
      content={content}
    />
  </header>
);

export default Header;
