import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { ValueAccessorConfig, angularOutputTarget } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];
export const config: Config = {
  namespace: 'nucleus',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: 'nucleus',
      proxiesFile: '../nucleus-react/lib/components/react-lib/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: 'nucleus',
      outputType: 'component',
      valueAccessorConfigs: angularValueAccessorBindings,
      directivesProxyFile: '../nucleus-angular/projects/nucleus-ng-component-library/src/lib/nucleus-ng-component-library/components.ts',
      directivesArrayFile: '../nucleus-angular/projects/nucleus-ng-component-library/src/lib/nucleus-ng-component-library/index.ts',
    })
  ],
};