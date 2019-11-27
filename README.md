# Nuxt.js MOTD

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]

Your source for Nuxt.js tips

## Guidelines for adding a new tip

Thank you for wishing to contribute a Nuxt.js tip. Although we appreciate all contributions, we have to follow some guidelines to make sure that each Nuxt tip we add has an as large as possible impact

A message of the day should be linked to a npm package, that can be one of the Nuxt.js core packages ~~or one from the eco-system~~. For the time being we will only accept tips with regards to functionalities that almost everybody uses. In general that means either one of the core packages or one of the officially supported Nuxt modules

## How to write a good tip

A good tip is:
- short and clear but descriptive
- does not include an opinion (unless it's a widely shared one)
- preferably has a call-to-action
- uses proper English (emoticons are allowed but can be problematic on the console)

Examples:

**Bad**
- You should use the http module and not axios _(opinon and not clear why)_
- Double quotes FTW!! _(uses slang)_
-

**Good**
- Did you know you can use the husky package to run lint automatically when committing on git?
- Most Nuxt.js projects expose a client-side api through window.$nuxt that can be used for e.g. programmatic navigation: window.$nuxt.$router.push('/my-route')


## Where are these Nuxt tips used?

The Nuxt tips are shown both in the [@nuxt/loading-screen](https://github.com/nuxt/loading-screen) as in the banner that is displayed on the [@nuxt/cli](https://github.com/nuxt/nuxt.js/tree/dev/packages/cli) when running the dev server

## License

MIT

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/motd/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/motd

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/motd.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/motd

[circle-ci-src]: https://img.shields.io/circleci/project/github/@nuxtjs/motd.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/@nuxtjs/motd

[codecov-src]: https://img.shields.io/codecov/c/github/@nuxtjs/motd.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/@nuxtjs/motd
