import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
	{
		files          : [ "**/*.{js,jsx,mjs,cjs,ts,tsx}" ],
		languageOptions: {
			ecmaVersion  : "latest",
			sourceType   : "module",
			parser       : typescriptParser,
			parserOptions: {
				ecmaFeatures: {
				  jsx: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			react,
			"@typescript-eslint": typescriptEslint,
		},
		rules: {
			"@typescript-eslint/no-explicit-any": 2,
			"indent"                            : [
				"error",
				"tab",
			],
			"linebreak-style": [
				"error",
				"unix",
			],
			"quotes": [
				"error",
				"double",
			],
			"semi": [
				"error",
				"always",
			],
			"keyword-spacing": [
				"error",
				{
					"overrides": {
						"catch": {
							"after": false,
						},
						"if": {
							"after": false,
						},
						"for": {
							"after": false,
						},
						"while": {
							"after": false,
						},
					},
					"before": true,
					"after" : true,
				},
			],
			"eqeqeq"      : 1,
			"semi-spacing": [
				"error",
				{
					"before": false,
					"after" : true,
				},
			],
			"no-extra-semi": "error",
			"comma-dangle" : [
				"error",
				"always-multiline",
			],
			"comma-spacing": [
				"error",
				{
					"before": false,
					"after" : true,
				},
			],
			"no-var"                      : "error",
			"prefer-const"                : "error",
			"camelcase"                   : "warn",
			"one-var-declaration-per-line": [
				"error",
				"always",
			],
			"no-trailing-spaces"  : "error",
			"no-dupe-args"        : "error",
			"no-dupe-keys"        : "error",
			"prefer-template"     : "error",
			"template-tag-spacing": "error",
			"block-spacing"       : [
				"error",
				"always",
			],
			"brace-style": [
				"error",
				"stroustrup",
				{
					"allowSingleLine": true,
				},
			],
			"space-in-parens": [
				"error",
				"always",
				{
					"exceptions": [
						"{}",
						"()",
						"empty",
					],
				},
			],
			"space-before-function-paren": [
				"error",
				{
					"anonymous" : "always",
					"named"     : "never",
					"asyncArrow": "always",
				},
			],
			"func-call-spacing": [
				"error",
				"never",
			],
			"wrap-iife": [
				"error",
				"inside",
			],
			"space-before-blocks": [
				"error",
				"always",
			],
			"object-curly-spacing": [
				"error",
				"always",
				{
					"objectsInObjects": false,
					"arraysInObjects" : false,
				},
			],
			"dot-notation": "error",
			"key-spacing" : [
				"error",
				{
					"align": "colon",
				},
			],
			"no-extra-boolean-cast": [
				"error",
				{
					"enforceForLogicalOperands": true,
				},
			],
			"curly": [
				"error",
				"multi-line",
			],
			"use-isnan"             : "error",
			"template-curly-spacing": [
				"error",
				"always",
			],
			"react/destructuring-assignment": "error",
			"react/jsx-first-prop-new-line" : [
				"error",
				"multiline",
			],
			"react/jsx-boolean-value"           : "error",
			"react/jsx-closing-bracket-location": [ 1, "tag-aligned" ],
			"react/jsx-closing-tag-location"    : "error",
			"react/jsx-curly-brace-presence"    : [
				"error",
				"never",
			],
			"react/jsx-curly-newline": [
				"error",
				{
					multiline : "consistent",
					singleline: "consistent",
				},
			],
			"react/jsx-curly-spacing": [
				"error",
				{
					"when"    : "always",
					"children": true,
					"spacing" : {
						"objectLiterals": "never",
					},
				},
			],
			"react/jsx-equals-spacing"         : [ "error", "never" ],
			"react/jsx-fragments"              : "error",
			"react/jsx-indent-props"           : [ "error", "tab" ],
			"react/jsx-indent"                 : [ "error", "tab" ],
			"react/jsx-newline"                : [ "error", { "prevent": true } ],
			"react/jsx-max-props-per-line"     : [ "error", { "when": "multiline" } ],
			"react/jsx-one-expression-per-line": [ "error", { "allow": "literal" }],
			"react/jsx-props-no-multi-spaces"  : "error",
			"react/jsx-sort-props"             : "error",
			"react/jsx-space-before-closing"   : [ "error", "always" ],
			"react/jsx-tag-spacing"            : [ "error", { "beforeClosing": "never" } ],
			"react/jsx-wrap-multilines"        : [ "error", {
				"declaration": "parens-new-line",
				"assignment" : "parens-new-line",
				"return"     : "parens-new-line",
				"arrow"      : "parens-new-line",
				"condition"  : "parens-new-line",
				"logical"    : "parens-new-line",
				"prop"       : "parens-new-line",
			  }],
		},
	},
];