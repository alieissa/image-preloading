import { Route } from '@angular/router';

import { ProgressiveLoaderComponent } from './progressive-loader/progressive-loader.component'
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';
import { OnDemandLoaderComponent } from './on-demand-loader/on-demand-loader.component';
export const APP_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: '/progressive',
        pathMatch: 'full'
    },
    {
        path: 'on-demand',
        component: OnDemandLoaderComponent
    },
    {
        path: 'progressive',
        component: ProgressiveLoaderComponent,
    },
    {
        path: 'lazy',
        component: LazyLoaderComponent
    }
]