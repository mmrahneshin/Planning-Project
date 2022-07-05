export class State {

    constructor(parent, action, pos_literals, neg_literals) {
        this.parent = parent;
        this.action = action;
        this.pos_literals = pos_literals;
        this.neg_literals = neg_literals;
    }
}