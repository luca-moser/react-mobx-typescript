import {action, observable} from 'mobx';

let animals = ["Elephant", "Tiger", "Moose", "Cat", "Dog"];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export class ApplicationStore {
    @observable name = "App";

    constructor() {
        this.changeNameRandom();
    }

    changeNameRandom = () => {
        let id = setInterval(() => {
            this.updateName(animals[getRandomInt(0,animals.length-1)]);
        }, 500);
    };

    @action
    updateName = (name: string) => {
        this.name = name;
    }
}

export var AppStoreInstance = new ApplicationStore();