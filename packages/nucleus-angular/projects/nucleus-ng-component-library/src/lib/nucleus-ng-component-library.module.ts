import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './nucleus-ng-component-library';
import { defineCustomElements } from 'nucleus/loader';
import { MyComponent } from './nucleus-ng-component-library/components';

@NgModule({
    declarations: [...DIRECTIVES],
    exports: [...DIRECTIVES],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => defineCustomElements,
            multi: true
        },
    ]
})
export class NucleusComponentLibraryModule { }