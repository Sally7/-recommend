/* eslint-disable */
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ["eslint:recommended", "plugin:vue/recommended"],
	parserOptions: {
		ecmaVersion: 10,
		parser: "babel-eslint",
		sourceType: "module",
	},
	plugins: ["vue"],
	globals: {
		window: true,
	},
	rules: {
		"vue/max-attributes-per-line": [
			2,
			{
				singleline: 10,
				multiline: {
					max: 1,
					allowFirstLine: false,
				},
			},
		],
		"vue/singleline-html-element-content-newline": "off",
		"vue/multiline-html-element-content-newline": "off",
		"vue/name-property-casing": ["error", "PascalCase"],
		"vue/no-v-html": "off",
		indent: ["warn", "tab"],
		"vue/html-indent": ["warn", "tab"],
		"linebreak-style": [0, "warn", "windows"],
		// quotes: ["error", "double"],
		semi: ["error", "always"],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "never",
					component: "always",
				},
				svg: "always",
				math: "always",
			},
		],
	},
};
