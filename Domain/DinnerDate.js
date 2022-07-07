const State = require('../Info/State');
const Action = require('../Info/Action');

class DinnerDate {

    startState = new State(null, null, [
        "garbage", "cleanHands", "quiet"
    ], []);
    goal = new State(null, null, ["dinner", "present"], ["garbage"]);

    actions = [];

    constructor() {
        this.createActions();
    }

    createActions() {
        this.createCookAction();
        this.createWrapAction();
        this.createCarryAction();
        this.createDollyAction();
    }

    createCookAction() {
        this.actions.push(new Action("Cook", ["cleanHands"], [], ["dinner"], []));
    }

    createWrapAction() {
        this.actions.push(new Action("Wrap", ["quiet"], [], ["present"], []));
    }

    createCarryAction() {
        this.actions.push(new Action("Carry", [], [], [], ["garbage", "cleanHands"]));
    }

    createDollyAction() {
        this.actions.push(new Action("Dolly", [], [], [], ["garbage", "quiet"]));

    }

}

module.exports = DinnerDate;
