
import UserService from "../services/UserService.js";
import {afterAll, beforeAll, describe, expect, it, jest} from "@jest/globals";


describe('window.location', () => {
    const open = jest.fn()
    Object.defineProperty(window, 'btoa', open);


    it('login doit reussir',() => {
        let userService = UserService;
        userService.login("John Rambo","superMDP");
        expect(userService.isConnected).toBe(true);
    });

    /*it('Logout quand un user est connecté', () => {
        let userService = new UserService();
        localStorage.setItem('user','test');
        userService.isConnected=true;
        userService.logout();
        expect(userService.isConnected).toBe(false);
        expect(localStorage.getItem('user')).toBeNull();
        expect(jest.isMockFunction(window.location.assign)).toBeCalledTimes(1);
    });*/

});

