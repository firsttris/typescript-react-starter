# Minimal Typescript + React Starter Kit

## included

- [**Typescript**](https://www.typescriptlang.org/) Javascript that scales (ES++ with types)
- [**React**](https://facebook.github.io/react/) view layer
- [**Redux**](https://github.com/reactjs/redux) Predictable state container
- [**Redux-Thunk**](https://github.com/gaearon/redux-thunk) Redux Middleware to write action creators that return a function instead of an action
- [**Jest**](https://facebook.github.io/jest/) for testing, mocking and coverage report
- [**ts-jest**](https://github.com/kulshekhar/ts-jest) typescript preprocessor for Jest
- [**enzyme**](https://github.com/airbnb/enzyme) create unit tests for react
- [**reactstrap**](https://reactstrap.github.io/) bootstrap 4 components for react
- [**bootstraps**](https://v4-alpha.getbootstrap.com/) bootstrap 4 css
- [**awesome-fonts**](http://fontawesome.io/) awesome-fonts
- [**http-server**](https://github.com/indexzero/http-server) to run production build
- [**tslint**](https://github.com/palantir/tslint) linter for typescript
- [**tslint-react**](https://github.com/palantir/tslint-react) Lint rules related to React & JSX for TSLint.

### webpack +dependencies
- [**webpack**](https://webpack.js.org/) module bundler
- [**webpack-dev-server**](https://github.com/webpack/webpack-dev-server) run bundle on dev server
- [**babili-webpack-plugin**](https://github.com/webpack-contrib/babili-webpack-plugin) minification
- [**css-loader**](https://github.com/webpack-contrib/css-loader) bundling css
- [**extract-text-webpack-plugin**](https://github.com/webpack-contrib/extract-text-webpack-plugin) Extract text from a bundle, or bundles, into a separate file.
- [**file-loader**](https://github.com/webpack-contrib/file-loader) bundling files
- [**friendly-errors-webpack-plugin**](https://github.com/geowarin/friendly-errors-webpack-plugin) friendly errors messages for webpack
- [**html-webpack-plugin**](https://github.com/jantimon/html-webpack-plugin) index.html creation for bundle
- [**style-loader**](https://github.com/webpack-contrib/style-loader) bundle styles
- [**ts-loader**](https://github.com/TypeStrong/ts-loader) typescript loader for webpack
- [**tslint-loader**](https://github.com/wbuchwalter/tslint-loader) Tslint loader for Webpack


less important:
- identity-obj-proxy - mocks certain objects for Jest
- rimraf - delete folders
- lodash - throtteling (sync store to localStorage)

## script jobs
```bash
npm run / yarn
prod-server ------ run production build (created with webpack build)
dev-server ------- run dev server, with hot-reload
webpack-build ---- creates bundled webpack build
test ------------- runs tests with coverage reports
test-watch ------- runs tests with coverage in watch mode
tslint ----------- show linting errors
tslint-fix ------- fix linting errors
```

## docs & sources
[**Offical Microsoft Typescript React Guide**](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)

## Donate
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KEAR9ZC228YCL)

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
