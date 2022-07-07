const State = require('../../Info/State');

let finalState;
let finish;

const ignorePrecondition = (domain, startState) => {
    let stateList = [startState];
    finish = false;
    finalState = null;
    let Hn = 0;
    while (!finish) {
        let nexTDepthStateList = [];
        for (let state of stateList) {
            successor(state, nexTDepthStateList, domain.actions);
        }
        stateList = [];
        stateList = nexTDepthStateList;

        isFinish(stateList, domain.goal);
        Hn++;
    }

    return Hn;
}

const isFinish = (stateList, goal) => {
    stateList.forEach(state => {
        let terminal = true;
        goal.pos_literals.forEach(element => {
            if (!state.pos_literals.includes(element)) {
                terminal = false;
            }
        });
        goal.neg_literals.forEach(element => {
            if (state.pos_literals.includes(element)) {
                terminal = false;
            }
        });
        if (terminal) {
            finish = true;
            finalState = state;
        }
    });
}

const successor = (state, nexTDepthStateList, actions) => {
    for (let action of actions) {
        createNewState(action, nexTDepthStateList, state);
    }
}

const createNewState = (action, nexTDepthStateList, state) => {
    let literals = [];
    state.pos_literals.forEach(item => {
        if (!action.deleteList.includes(item)) {
            literals.push(item);
        }
    });

    action.addList.forEach(element => {
        if (!literals.includes(element)) {
            literals.push(element);
        }
    });
    nexTDepthStateList.push(new State(state, action, literals, []));
}

module.exports = ignorePrecondition;
