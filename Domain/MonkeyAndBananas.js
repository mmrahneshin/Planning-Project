const State = require('../Info/State');
const Action = require('../Info/Action');

class MonkeyAndBananas {

    location = ["A", "B", "C"];
    box = ["Box"];
    startState = new State(null, null, ["AtMonkeyA", "AtBananas", "AtBoxC", "HeightMonkeyLow", "HeightBoxLow", ""], []);
    goal = ["HaveMonkeyBananas"];
    actions = [];

    constructor() {

    }

}