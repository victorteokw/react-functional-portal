react-functional-portal
==============
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][cov-image]][cov-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![DevDependency Status][daviddm-image-dev]][daviddm-url-dev]
[![License][license-image]][license-url]
[![PR Welcome][pr-image]][pr-url]

The tiniest react portal implemented with hook.

## Introduction

This is the tiniest portal implementation. Do any style on its children and
leave portal component lightweight.

## Installation

Install this package with `npm`.

```bash
npm i react-functional-portal -s
```

## Usage Pattern

The usage of this package is very intuitive.

```jsx
import React from 'react';
import Portal from 'react-functional-portal';

const HomePage = (props) => (
  <div>
    <Portal>
      <div>Alert</div>
    </Portal>
  </div>
);

export default HomePage;
```

## License

MIT © [Zhang Kai Yu][license-url]

[npm-image]: https://img.shields.io/npm/v/react-functional-portal.svg?style=flat-square&color=ff69b4&logo=react
[npm-url]: https://npmjs.org/package/react-functional-portal
[travis-image]: https://img.shields.io/travis/zhangkaiyulw/react-functional-portal.svg?style=flat-square&color=blue&logo=travis
[travis-url]: https://travis-ci.org/zhangkaiyulw/react-functional-portal
[cov-image]: https://img.shields.io/codecov/c/github/zhangkaiyulw/react-functional-portal/master.svg?style=flat-square&logo=codecov
[cov-url]: https://codecov.io/gh/zhangkaiyulw/react-functional-portal
[daviddm-image]: https://img.shields.io/david/zhangkaiyulw/react-functional-portal.svg?style=flat-square
[daviddm-url]: https://david-dm.org/zhangkaiyulw/react-functional-portal
[daviddm-image-dev]: https://img.shields.io/david/dev/zhangkaiyulw/react-functional-portal.svg?style=flat-square
[daviddm-url-dev]: https://david-dm.org/zhangkaiyulw/react-functional-portal?type=dev
[license-image]: https://img.shields.io/github/license/zhangkaiyulw/react-functional-portal.svg?style=flat-square
[license-url]: https://github.com/zhangkaiyulw/react-functional-portal/blob/master/LICENSE
[pr-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[pr-url]: https://github.com/zhangkaiyulw/react-functional-portal/blob/master/CONTRIBUTING.md
