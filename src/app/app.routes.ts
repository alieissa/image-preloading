import { Route } from '@angular/router';

import { ProgressiveLoaderComponent } from './progressive-loader/progressive-loader.component'
import { LazyLoaderComponent } from './lazy-loader/lazy-loader.component';
export const APP_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: '/progressive',
        pathMatch: 'full'
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