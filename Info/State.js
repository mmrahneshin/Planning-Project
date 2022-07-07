class State {

    constructor(parent, action, pos_literals, neg_literals, Gn = 0, Hn) {
        this.parent = parent;
        this.action = action;
        this.pos_literals = pos_literals;
        this.neg_literals = neg_literals;
        this.Gn = Gn;
        this.Hn = Hn;
        this.Fn = Gn + Fn;
    }
}

module.exports = State;