import { Routes, RouterModule } from '@angular/router'
import { HelloComponent } from './hello/hello.component'
import { AbtMeComponent } from './abt-me/abt-me.component'
import { ModuleWithProviders } from '@angular/core'
import { SomethingComponent } from './something/something.component'
import { InterestingComponent } from './interesting/interesting.component'
import { WhateverComponent } from './whatever/whatever.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { DinoComponent } from './dino/dino.component'

const APP_ROUTES: Routes = [
    { path: 'abt-me', component: AbtMeComponent, data: { animationState: 'Four' } },

    { path: 'something', component: SomethingComponent, data: { animationState: 'Two' } },
    { path: 'interesting', component: InterestingComponent, data: { animationState: 'Three' } },
    { path: 'whatever', component: WhateverComponent, data: { animationState: 'Five' } },

    { path: 'missing-you', component: NotFoundComponent, data: { animationState: 'Six' } },
    { path: '', component: HelloComponent, data: { animationState: 'One' } },
    { path: '**', component: NotFoundComponent },
    { path: 'dino', component: DinoComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
