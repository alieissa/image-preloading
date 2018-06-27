import { Route } from '@angular/router';

import { ProgressiveLoaderComponent } from './progressive-loader/progressive-loader.component'

export const APP_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: '/progressive',
        pathMatch: 'full'
    },
    {
        path: 'progressive',
        component: ProgressiveLoaderComponent,
    }
]