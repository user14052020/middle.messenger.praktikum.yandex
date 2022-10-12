import { Link,LinkProps } from './index';
import { expect } from 'chai';
import Router from '~/utils/Router';
import sinon from 'sinon';
import {AuthorizationRegistrationPage} from "~/pages/authorization_registration";

Router.reset();

describe('Link', () => {
    it('should render', () => {
        new Link({label:"Выход", events: {click: () => { Router.go('/');}}} as LinkProps);
    });

    it('element should return div', () => {
        const link = new Link({label:"Выход", events: {click: () => {Router.go('/')}}} as LinkProps);
        const element = link.element;

        expect(element).to.be.instanceof(window.HTMLDivElement)
    });

    it('should go to passed route on click', () => {
        Router.use('/',AuthorizationRegistrationPage);
        Router.start();
        const link = new Link({label:"Выход", events: {click: () => {Router.go('/')}}} as LinkProps);
        let spy = sinon.spy(Router, 'go');
        const element = link.element as HTMLDivElement;
        element.click();

        expect(spy.calledOnce).to.eq(true);

    });
});