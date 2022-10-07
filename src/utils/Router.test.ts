import { expect } from 'chai';
import Router from './Router';
import Block from './Block';

describe('Router', () => {

    class HomePage extends Block {}
    class AboutPage extends Block {}
    class InfoPage extends Block {}

    Router
        .use('/', HomePage)
        .use('/about', AboutPage)
        .use('/info', InfoPage)
        .start();

    it('Change route', () => {
        Router.go('/');
        Router.go('/about');
        expect(Router.history.length).to.eq(3);
    });

    it('Get pathname', () => {
        Router.go('/info');
        // const { pathname } = Router.currentRoute || {};
        // expect(pathname).to.eq('/info');
    });
});