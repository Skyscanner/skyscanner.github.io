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

import ReactMarkdown from 'react-markdown';
import BpkText, {
  TEXT_STYLES,
} from '@skyscanner/backpack-web/bpk-component-text';
import { cssModules } from '@skyscanner/backpack-web/bpk-react-utils';

import STYLES from './Section.scss';

const c = cssModules(STYLES);

const Section = (props) => {
  // eslint-disable-next-line react/prop-types
  const { content, title } = props;
  return (
    <div className={c('Section')}>
      {title && (
        <div>
          <section className={c('Section__heading')}>
            <div className={c('Section__heading-title')}>
              <BpkText tagName="h2" textStyle={TEXT_STYLES.subheading}>
                {title}
              </BpkText>
            </div>
          </section>
          <hr className={c('Section__divider')} />
        </div>
      )}
      <section className={c('Section__main')}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </section>
    </div>
  );
};

Section.defaultProps = {
  title: null,
};

export default Section;
