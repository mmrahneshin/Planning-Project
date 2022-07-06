const State = require('../Info/State');
const Action = require('../Info/Action');

class MonkeyAndBananas {

    location = ["A", "B", "C"];
    box = ["Box"];
    startState = new State(null, null, [
        "AtMonkeyA", "AtBananasB", "AtBoxC",
        "HeightMonkeyLow", "HeightBoxLow", "HeightBananasHigh",
    ], []);
    goal = ["HaveMonkeyBananas"];
    actions = [];

    constructor() {
        this.createActions();
    }

    createActions() {
        this.createGoAction();
        this.createPushAction();
        this.createClimbUpAction();
        this.createGraspAction();
    }

    createGoAction() {
        this.location.forEach(x => {
            this.location.forEach(y => {
                if (x !== y) {
                    this.actions.push(new Action("Go", [
                        "AtMonkey" + x, "HeightMonkeyLow"
                    ], [], [
                        "AtMonkey" + y
                    ], [
                        "AtMonkey" + x
                    ]));
                }
            });
        });
    }

    createPushAction() {
        this.box.forEach(b => {
            this.location.forEach(x => {
                this.location.forEach(y => {
                    if (x !== y) {
                        this.actions.push(new Action("Push", [
                            "AtMonkey" + x, "HeightMonkeyLow", "At" + b + x, "Height" + b + "Low"
                        ], [], [
                            "At" + b + y, "AtMonkey" + y
                        ], [
                            "At" + b + x, "AtMonkey" + x
                        ]));
                    }
                });
            });
        });
    }

    createClimbUpAction() {
        this.location.forEach(x => {
            this.box.forEach(b => {
                this.actions.push(new Action("ClimbUp", [
                    "AtMonkey" + x, "HeightMonkeyLow", "At" + b + x, "Height" + b + "Low"
                ], [], [
                    "OnMonkey" + b, "HeightMonkeyHigh"
                ], [
                    "HeightMonkeyLow"
                ]));
            });
        });
    }

    createGraspAction() {
        this.location.forEach(x => {
            this.box.forEach(b => {
                this.actions.push(new Action("Grasp", [
                    "AtMonkey" + x, "HeightMonkeyHigh", "AtBananas" + x, "HeightBananasHigh", "OnMonkey" + b, "At" + b + x
                ], [], [
                    "HaveMonkeyBananas"
                ], [
                    "AtBananas" + x, "HeightBananasHigh"
                ]));
            });

        });
    }

}

module.exports = MonkeyAndBananas;
