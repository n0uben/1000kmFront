
import UserService from "../services/UserService.js";
import {beforeEach, describe, expect, it, jest} from "@jest/globals";


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

    });
});

