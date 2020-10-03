import {Routes, RouterModule} from '@angular/router'
import { HelloComponent } from './hello/hello.component'
import { AbtMeComponent } from './abt-me/abt-me.component'
import { ModuleWithProviders } from '@angular/core'
import { SomethingComponent } from './something/something.component'
import { InterestingComponent } from './interesting/interesting.component'
import { WhateverComponent } from './whatever/whatever.component'
import { NotFoundComponent } from './not-found/not-found.component'

const APP_ROUTES: Routes = [
    {path: 'abt-me', component: AbtMeComponent},
    
    {path: 'something', component: SomethingComponent},
    {path: 'interesting', component: InterestingComponent},
    {path: 'whatever', component: WhateverComponent},
    
    {path: 'missing-you', component: NotFoundComponent},
    {path: '', component: HelloComponent},
    {path: '**', component: NotFoundComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
