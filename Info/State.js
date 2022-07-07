class State {

    constructor(parent, action, pos_literals, neg_literals, Gn = 0, Fn = 0) {
        this.parent = parent;
        this.action = action;
        this.pos_literals = pos_literals;
        this.neg_literals = neg_literals;
        this.Gn = Gn;
        this.Fn = Fn;
    }
}

module.exports = State;