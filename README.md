# React-progress-spinner

> Animated React Progress Spinner component for download/upload animations

**Demo:** https://react-progress-spinner.vercel.app/

A React component that provides a simple method of adding a progress spinner to your page. This could be useful for uploads, downloads, or anywhere else that you want to show progress to completion.

<hr>

<img src="https://user-images.githubusercontent.com/11626619/96931140-1fcf8400-14bd-11eb-845e-f20d0d095533.gif" width="100%">

<hr>

## Features

- ⚡️ Quick and easy to install - Import the component, add your progress as a percentage prop and you're set
- ⚙️ Fully customisable: Hook into the styles in order to change any style value
- 🏋️‍♀️ Dependency free and lightweight Bundle size is just 8KB

## Usage

1. Add `react-progress-spinner` as a dependency using `yarn add react-progress-spinner`. // Not yet on NPM

2. Import into your project:

```
import ProgressSpinner from 'react-progress-spinner'
```

3. Render the component:

```
<ProgressSpinner percentage={50} />
```

4. Add props to configure:

- `percentage`: pass an integer from 1-100 to signify the current progress percentage
- `radius`: pass an integer to change the size of the progress spinner
- `thickness`: pass an integer to define the thickness of the progress bar

```
<ProgressSpinner percentage={currentProgress} radius={120} thickness={15} />
```

## Development

1. Run `yarn install` to install required dependencies

2. Run `yarn dev` to start the development environment. This will run on localhost:3000

3. Run `yarn build` to build the new version of the component
