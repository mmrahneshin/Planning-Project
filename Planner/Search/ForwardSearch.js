const State = require('../../Info/State');

let finalState;
let finish;

const forwardSearch = (domain) => {
    let stateList = [domain.startState];
    finish = false;
    finalState = null;
    while (!finish) {
        let nexTDepthStateList = [];
        for (let state of stateList) {
            checkAction(state, nexTDepthStateList, domain.actions);
        }
        stateList = [];
        stateList = nexTDepthStateList;

        isFinish(stateList, domain.goal);

    }

    printSolution(finalState, stateList);
}

const isFinish = (stateList, goal) => {
    stateList.forEach(state => {
        let terminal = true;
        goal.forEach(element => {
            if (!state.pos_literals.includes(element)) {
                terminal = false;
            }
        });
        if (terminal) {
            finish = true;
            finalState = state;
        }
    });
}

const checkAction = (state, nexTDepthStateList, actions) => {
    for (let action of actions) {

        let bool = true;
        for (let preCondition of action.pos_preconditions) {
            let posPreconditionBool = state.pos_literals.includes(preCondition);

            if (!posPreconditionBool) {
                bool = false;
                break;
            }
        }

        if (!bool) {
            continue;
        }

        for (let preCondition of action.neg_preconditions) {
            let negPreconditionBool = state.pos_literals.includes(preCondition);

            if (negPreconditionBool) {
                bool = false
                break;
            }
        }

        if (!bool) {
            continue;
        }

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

const printSolution = (finalState, stateList) => {

    // stateList.forEach(state => {
    //     console.log(state.action);
    //     console.log(state.pos_literals);
    //     console.log(" ");
    // });

    let state = finalState;
    while (state !== null) {
        console.log(state.action);
        console.log(state.pos_literals);
        console.log(" ");
        state = state.parent;
    }
}

module.exports = forwardSearch;
