# Custom React Setup

This repo contains the following basic setup for a React project.

- Babel and @babel/preset-env for modern JavaScript transpiling.
- CSS, SASS, PostCSS with postcss-preset-env for CSS fallbacks for better cross-browser support.
- Browserslist config for customizing the browsers you want to support for JS and CSS, all in one place.
- Outputting all CSS to a file with mini-css-extract-plugin
- HTML templates with html-webpack-plugin
- Cleaning the output folder every build with clean-webpack-plugin
- React with the new automatic importing functionality supported in React 17+ through Babel.
- React Fast Refresh in Webpack: the new hot module loading tool supported by the React team.
- Outputting or bundling images with the new Webpack 5 Asset Module type.
- Webpack bundle visualization with webpack-bundle-analyzer

# Usage

```
"scripts": {
		"start": "cross-env webpack server",
		"watch": "webpack --watch",
		"build": "cross-env NODE_ENV=production webpack",
		"build-dev": "webpack",
		"stats": "cross-env STATS=server webpack --json build-stats.json",
		"clean": "rm -rf dist"
	}
```
