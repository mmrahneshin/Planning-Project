const State = require('../Info/State');
const Action = require('../Info/Action');

class BlocksWorld {

    block = ["A", "B", "C"];
    blockWithTable = ["A", "B", "C", "Table"];

    startState = new State(null, null, ["OnATable", "OnBTable", "OnCA", "ClearB", "ClearC"], []);
    goal = ["OnAB", "OnBC"];
    actions = [];


    constructor() {
        this.createActions();
    }

    createActions() {
        this.createMoveAction();
        this.createMoveToTable();
    }

    createMoveAction() {
        this.block.forEach(b => {
            this.blockWithTable.forEach(x => {
                if (b !== x) {
                    this.block.forEach(y => {
                        if (y !== b && y !== x) {
                            this.actions.push(new Action(
                                "Move",
                                ["On" + b + x, "Clear" + b, "Clear" + y],
                                [],
                                ["On" + b + y, "Clear" + b],
                                ["On" + b + x, "Clear" + y]
                            ));;
                        }
                    });
                }
            });
        });
    }

    createMoveToTable() {

        this.block.forEach(b => {
            this.block.forEach(x => {
                if (b !== x) {
                    this.actions.push(new Action(
                        "MoveToTable",
                        ["On" + b + x, "Clear" + b],
                        [],
                        ["On" + b + "Table", "Clear" + x],
                        ["On" + b + x]
                    ));
                }
            });
        });

    }

}

module.exports = BlocksWorld;
