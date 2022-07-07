const State = require('../../Info/State');

let finalState;
let finish;

const IgnoreDeleteLists = (domain, newState) => {
    let stateList = [newState];
    finish = false;
    finalState = null;
    let Hn = 0;


    // while (!finish) {
    let nexTDepthStateList = [];
    for (let state of stateList) {
        successor(state, nexTDepthStateList, domain.actions);
    }
    stateList = [];
    stateList = nexTDepthStateList;

    isFinish(stateList, domain.goal);
    Hn++;
    // }
    printSolution(finalState, stateList);
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
    let literals = state.pos_literals;
    action.addList.forEach(element => {
        if (!literals.includes(element)) {
            literals.push(element);
        }
    });
    nexTDepthStateList.push(new State(state, action, literals, []));

    nexTDepthStateList.forEach(state => {
        console.log(state.action);
        console.log(state.pos_literals);
        console.log(" ");
    });

}

const printSolution = (finalState, stateList) => {

    // stateList.forEach(state => {
    //     console.log(state.action);
    //     console.log(state.pos_literals);
    //     console.log(" ");
    // });

    // let state = finalState;
    // while (state !== null) {
    //     console.log(state.action);
    //     console.log(state.pos_literals);
    //     console.log(" ");
    //     state = state.parent;
    // }
}

module.exports = IgnoreDeleteLists;
