import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
    transition('One => Two, Two => Three, Three => Four, Four => Five, Five => Six, One => Three, One => Four, One => Five, One => Six, Two => Four, Two => Five, Two => Six, Three => Five, Three => Six, Four => Six', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 15,
                right: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({
                right: '-100%',
                opacity: 0
            })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('1.5s ease-out', style({ right: '100%', opacity: 0 }))]),
            query(':enter', [animate('1.5s ease-out', style({ right: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ]),


    transition('Six => Five, Six => Four, Six => Three, Six => Two, Six => One, Five => Four, Five => Three, Five => Two, Five => One, Four => Three, Four => Two, Four => One, Three => Two, Three => One, Two => One', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 15,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
            query(':leave', [animate('1.5s ease-out', style({ left: '100%', opacity: 0 }))]),
            query(':enter', [animate('1.5s ease-out', style({ left: '0%', opacity: 1 }))])
        ]),
        query(':enter', animateChild())
    ])
]);