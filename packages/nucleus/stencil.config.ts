import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'nucleus',
  taskQueue: 'async',
  globalStyle: './src/styles/tailwind.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      dir: 'components'
    },
    reactOutputTarget({
      componentCorePackage: 'nucleus',
      proxiesFile: '../nucleus-react/lib/components/react-lib/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'nucleus',
      outputType: 'component',
      directivesProxyFile: '../nucleus-angular/projects/nucleus-ng-component-library/src/lib/nucleus-ng-component-library/proxies.ts',
    })
  ]
};