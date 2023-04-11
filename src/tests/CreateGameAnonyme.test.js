const {expect,test, describe, beforeAll, afterAll, it, jest} = require('@jest/globals');
const {mount} = require('@vue/test-utils');
const CreateGameAnonyme = require('../components/CreateGameAnonyme.vue').default;

describe('test composant create game en anonyme sans compte',() => {
    test('test fonction onclickreroll doit afficher une image de la liste',async () =>{
        const wrapper = mount(CreateGameAnonyme);
        const img = wrapper.find('#car');
        expect(img.html().src).toEqual('./../assets/images/205.jpg');
    });

})