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

const content = [
  {
    title: '',
    content:
      'We love Open Source at Skyscanner. Our engineers use it to run our infrastructure and services, making it possible to build Skyscanner’s online marketplace and bring the joy of travel to millions of people around the world every day. \r\n\r\n We’re grateful to other companies who share their ways of working – it benefits our team, helping us learn and improve. That’s why we want to share our own software with you. Below, you can explore some of the projects we’ve created in areas like Security, Kubernetes, UI Design and SDLC. Please take a look around. ',
  },
  {
    title: 'Security tools',
    content:
      'Our security teams like to automate as much as possible. In fact, it’s one of their guiding principles. Here you’ll find projects to help you on cloud governance ([CFRipper](https://github.com/Skyscanner/cfripper)), structured text security linter ([Whispers](https://github.com/Skyscanner/whispers)) and Sonarqube Secrets  plugin for Java and Javascript ([Sonarqube](https://github.com/Skyscanner/sonar-secrets)).',
  },
  {
    title: 'Kubernetes tools',
    content:
      "We use Kubernetes a lot at Skyscanner. It’s great for running containerised workloads in a resilient, secure and cost-effective way. \r\n\r\n On top of contributing back to community tooling in the Kubernetes ecosystem, we've created several projects to help us improve our ways of working ([kms-issuer](https://github.com/Skyscanner/kms-issuer)) and safely deploy services across multiple clusters worldwide ([argocd-progressive-rollout](https://github.com/Skyscanner/argocd-progressive-rollout)). ",
  },
  {
    title: 'UI/UX',
    content:
      'Backpack is our design system. We like to describe it as the codification of design at Skyscanner. It’s a collection of design resources, reusable components and guidelines for creating our products with ease and consistency.\r\n\r\n Backpack empowers our people, giving them the tools to quickly deliver amazing work that’s on-brand, highly accessible and includes things like theming, RTL and dark mode support.\r\n\r\n Our design system supports four main platforms: [Web](https://github.com/Skyscanner/backpack), [iOS](https://github.com/Skyscanner/backpack-ios), [Android](https://github.com/Skyscanner/backpack-android) and [React Native](https://github.com/Skyscanner/backpack-react-native) – so we’re able to build great experiences for every traveller, no matter which platform they’re using.',
  },
  {
    title: 'Developer Tools and Libraries',
    content:
      "We believe reliability and resilience across our services are of paramount importance. Retries (with configurable backoff), fallbacks and circuit breakers are just a few of the patterns we’ve adopted to achieve this. By sharing these back with the community, we can help fill the niche gaps where libraries implementing these patterns don't exist ([Pyfailsafe](https://github.com/Skyscanner/pyfailsafe)).\r\n\r\n[Turbolift](https://github.com/Skyscanner/turbolift) allows developers to create and manage PRs on a high number of repositories, eliminating the admin burden of running change at scale.\r\n\r\nAlso we have some linters to help us with code quality and styling ([stylelint-config-skyscanner](https://github.com/Skyscanner/stylelint-config-skyscanner), [eslint-config-skyscanner](https://github.com/Skyscanner/eslint-config-skyscanner))",
  },
];

export default content;
