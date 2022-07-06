const State = require('../Info/State');
const Action = require('../Info/Action');

class LinkRepeat {

    startState = new State(null, null, [
        "G*", "G0"
    ], []);
    goal = ["G*"];
    actions = [];

    constructor(k) {
        this.goal.push("G" + k);
        this.createActions(k);
    }

    createActions(k) {
        this.createAiAction(k);
        this.createAStarAction();
    }

    createAiAction(k) {
        for (let i = 1; i <= k; i++) {
            this.actions.push(new Action("A" + i, [
                "G*", "G" + (i - 1)
            ], [], [
                "G" + i
            ], [
                "G*"
            ]));
        }
    }

    createAStarAction() {
        this.actions.push(new Action("A*", [], [], ["G*"], []));
    }

}
module.exports = LinkRepeat;
