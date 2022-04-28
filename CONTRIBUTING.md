# Contributing to [skyscanner.github.io](https://skyscanner.github.io)

We're glad you want to make a contribution!

## Table of contents

* [Prerequisites](#prerequisites)
* [Pre-commit hooks](#pre-commit-hooks)
* [How to](#how-to)

## Prerequisites

### License

By contributing your code, you agree to license your contribution under the terms of the APLv2: [LICENSE](./LICENSE)

All files are released with the Apache 2.0 license.

If you are adding a new file it should have a header like this:

```
/**
 * Copyright <<YEAR>> Skyscanner Limited.
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
 ```

### Installing Node

skyscanner.github.io is developed using Node, using the following versions:

* `LTS/gallium` (Node ^16.15.0)
* `^8.5.5` (npm)

To install npm, use `npm install --global npm@^8.5.5`.

### Code style

[skyscanner.github.io](https://skyscanner.github.io) uses a combination of [ESLint](https://eslint.org) and [Prettier](https://prettier.io) to enforce coding styles. ESLint runs as a pre-commit hook, so it isn't possible to commit code that causes ESLint to fail.

## Pre-commit hooks

This project contains some pre-commit hooks that will format automatically some files based on our guidelines.

When performing a commit, the modified files will be formatted and added to the commit. In case of not been able to fix any of the issues, the commit will be aborted the list of errors will be displayed in the console.

## How to

Create a pull request to [skyscanner.github.io](https://skyscanner.github.io)

1. [Fork the repository](https://github.com/skyscanner/skyscanner.github.io/fork).
2. Create a new branch.
3. Make your changes.
    - If you are adding a new section for content. Add a new entry to the [content](./src/content.js) file in the correct order you wish for it to appear on the page, along with a title (optional) and the main body of content.
4. Commit and push your new branch.
5. Submit a [pull request](https://github.com/skyscanner/skyscanner.github.io/pulls).

