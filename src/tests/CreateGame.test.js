import {describe, expect, it} from "@jest/globals";
import CreateGame from "../components/CreateGame.vue";
import {mount} from "@vue/test-utils";

describe('test CreateGame component', () => {
    it('is a Vue instance',() => {
        const wrapper = mount(CreateGame,{
            propsData:{
                task:{
                    isAuth: false,
                    current: null,
                    imgnames: ["205.jpg","skyline.jpg"]
                }
            }
        });
        expect(wrapper.vm).toBeTruthy();
    });

});