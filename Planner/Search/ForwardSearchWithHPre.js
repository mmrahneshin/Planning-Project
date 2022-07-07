const ignorePrecondition = require('../Heuristic/IgnorePrecondition');
const State = require('../../Info/State');

let finalState;
let finish;
let domain;

const forwardSearchWithHPre = (dom) => {
    domain = dom;
    let stateList = [domain.startState];
    finish = false;
    finalState = null;
    while (!finish) {
        let state = minFinder(stateList);
        successor(state, stateList, domain.actions);
        isFinish(stateList, domain.goal);


    }

    printSolution(finalState, stateList);
}

const minFinder = (stateList) => {
    let min = Number.MAX_VALUE;
    let minState = null;

    stateList.forEach((state) => {
        if (state.Fn < min) {
            minState = state;
            min = state.Fn;
        }
    });
    return minState;
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

const successor = (state, stateList, actions) => {
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

        createNewState(action, stateList, state);
    }
}

const createNewState = (action, stateList, state) => {
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
    let index = stateList.indexOf(state);
    if (index > -1) {
        stateList.splice(index, 1);
    }
    let newState = new State(state, action, literals, [], state.Gn + 1);
    newState.Fn = newState.Gn + ignorePrecondition(domain, newState);
    if (!stateList.includes(newState)) {
        stateList.push(newState);

    }
}

const printSolution = (finalState, stateList) => {

    // stateList.forEach(state => {
    //     console.log(state.action);
    //     console.log(state.pos_literals);
    //     console.log(state.Fn);
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

module.exports = forwardSearchWithHPre;
