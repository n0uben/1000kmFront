const {expect,test, describe, beforeAll, afterAll, it, jest} = require('@jest/globals');
const {UserService} = require("../services/UserService.js");
require('jest-localstorage-mock');


describe('window.location', () => {
    const { location } = window;

    beforeAll(() => {
        delete window.location;
        window.location = { reload: jest.fn() };
    });

    afterAll(() => {
        window.location = location;
    });

    it('')

    it('login doit reussir',() => {
        let userService = new UserService();
        userService.login("brandon54","azerty");
        expect(userService.isConnected).toBe(true);
    });

    it('Logout quand un user est connecté', () => {
        let userService = new UserService();
        localStorage.setItem('user','test');
        userService.isConnected=true;
        userService.logout();
        expect(userService.isConnected).toBe(false);
        expect(localStorage.getItem('user')).toBeNull();
        expect(jest.isMockFunction(window.location.assign)).toBeCalledTimes(1);
    });

});

