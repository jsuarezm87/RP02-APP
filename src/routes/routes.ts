import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';

interface Route {    
    to: string,
    path: string,
    Component: () => JSX.Element,
    name: string,
}

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'lazy-1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'lazy-3',
    }   
];