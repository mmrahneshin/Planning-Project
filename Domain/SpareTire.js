const State = require('../Info/State');
const Action = require('../Info/Action');
class SpareTire {

    startState = new State(null, null, ["atflataxle", "atsparetrunk"], []);
    goal = ["atspareaxle"];
    tires = ["flat", "spare"];
    locations = ["axle", "trunk"];
    actions = [];

    constructor() {
        this.createActions();
    }

    createActions() {

        this.createRemoveActions();
        this.createPutOnActions();
        this.createLeaveOverNightsActions();

    }

    createRemoveActions() {
        for (let tire of this.tires) {
            for (let location of this.locations) {
                this.actions.push(new Action("Remove"
                    , ["at" + tire + location], []
                    , ["at" + tire + "Ground"], ["at" + tire + location]));
            }
        }
    }

    createPutOnActions() {
        for (let tire of this.tires) {
            this.actions.push(new Action("PutOn", ["at" + tire + "Ground"]
                , ["at" + "flat" + "axle", "at" + "spare" + "axle"]
                , ["at" + tire + "axle"], ["at" + tire + "Ground"]));
        }
    }

    createLeaveOverNightsActions() {
        this.actions.push(new Action("LeaveOverNight", [], [], []
            , ["at" + "spare" + "Ground", "at" + "spare" + "axle", "at" + "spare" + "trunk"
                , "at" + "flat" + "Ground", "at" + "flat" + "axle", "at" + "flat" + "trunk"
            ]
        ));
    }

}

module.exports = SpareTire;
