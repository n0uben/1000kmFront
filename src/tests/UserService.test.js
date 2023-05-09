
import UserService from "../services/UserService.js";
import {afterAll, beforeAll, beforeEach, describe, expect, it, jest} from "@jest/globals";


describe('userservice', () => {

    beforeEach(() => {
        const localStorageMock = (() => {
            let store = {};
            return {
                getItem: (key) => store[key] || null,
                setItem: (key, value) => {
                    store[key] = String(value);
                },
                removeItem: (key) => {
                    delete store[key];
                },
                clear: () => {
                    store = {};
                },
            };
        })();
        Object.defineProperty(window, 'localStorage', { value: localStorageMock });

        window.localStorage.clear();
    });

    describe('login', () => {
        it('should login a user', async () => {
            const mockUser = {
                "idUtilisateur": 1,
                "pseudo": "test",
                "motDePasse": "blabla",
                "nbPartiesJouees": 0,
                "nbPartiesGagnees": 0,
                "kmParcourus": 0,
                "peutAvancer": false,
                "amis": []
            };
            jest.spyOn(window, 'fetch').mockResolvedValueOnce({
                ok: true,
                json: async () => mockUser,
            });

            const result = await UserService.login('test', 'blabla');

            expect(result).toEqual(mockUser);
            expect(localStorage.getItem('user')).toEqual(JSON.stringify(mockUser));
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
});

