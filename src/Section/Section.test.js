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

import { render } from '@testing-library/react';

import Section from './Section';

describe('Section tests', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <Section title="Section title" content="Section content" />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with no title', () => {
    const { asFragment } = render(<Section content="Section content" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
