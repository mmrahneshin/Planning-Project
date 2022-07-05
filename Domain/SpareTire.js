import { State } from '../Info/State';
import { Action } from '../Info/Action';
class SpareTire {

    startState = new State(null, null, [["at", "flat", "axle"], ["at", "spare", "trunk"]]);
    goal = ["at", "spare", "axle"];
    tires = ["flat", "spare"];
    locations = ["axle", "trunk"];
    actions = [];

    constructor() {
        createActions();
        console.log(this);
    }

    createActions() {

        createRemoveActions();
        createPutOnActions();
        createLeaveOverNightsActions();

    }

    createRemoveActions() {
        for (tire in this.tires) {
            for (location in this.locations) {
                actions.append(new Action("Remove"
                    , [["at", tire, location]], null
                    , [["at", tire, "Ground"]], [["at", tire, location]]));
            }
        }
    }

    createPutOnActions() {
        for (tire in tires) {
            actions.append(new Action("PutOn", [["at", tire, "Ground"]]
                , [["at", "flat", "axle"], ["at", "spare", "axle"]]
                , [["at", tire, "axle"]], [["at", tire, "Ground"]]));
        }
    }

    createLeaveOverNightsActions() {
        actions.append(new Action("LeaveOverNight", null, null, null
            , [["at", "spare", "Ground"], ["at", "spare", "axle"], ["at", "spare", "trunk"]
                , ["at", "flat", "Ground"], ["at", "flat", "axle"], ["at", "flat", "trunk"]
            ]
        ));
    }

}
