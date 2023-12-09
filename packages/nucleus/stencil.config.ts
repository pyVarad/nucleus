import { Config } from "@stencil/core";
import { postcss } from "@stencil-community/postcss";
import autoprefixer from "autoprefixer";
import { reactOutputTarget } from "@stencil/react-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";

const purgecss = require("@fullhuman/postcss-purgecss")({
	content: ["./src/**/*.tsx", "./src/**/*.css", "./src/index.html"],
	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
	namespace: "nucleus",
	taskQueue: "async",
	globalStyle: "./src/styles/styles.css",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
		},
		{
			type: "dist-custom-elements",
			dir: "components",
		},
		{
			type: "dist",
			copy: [
				{
					src: "fonts",
					warn: true,
				},
			],
		},
		reactOutputTarget({
			componentCorePackage: "nucleus",
			proxiesFile: "../nucleus-react/lib/components/react-lib/index.ts",
		}),
		angularOutputTarget({
			componentCorePackage: "nucleus",
			outputType: "component",
			directivesProxyFile:
				"../nucleus-angular/projects/nucleus-ng-component-library/src/lib/nucleus-ng-component-library/proxies.ts",
		}),
	],
	plugins: [
		postcss({
			plugins: [
				require("postcss-import"),
				require("tailwindcss")("./tailwind.config.js"),
				autoprefixer(),
				...(process.env.NODE_ENV === "production"
					? [purgecss, require("cssnano")]
					: []),
			],
		}),
	],
	devServer: {
		reloadStrategy: "hmr",
	},
};
