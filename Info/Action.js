export class Action {

    constructor(name, pos_preconditions, neg_preconditions, addList, deleteList) {

        this.name = name;
        this.pos_preconditions = pos_preconditions;
        this.neg_preconditions = neg_preconditions;
        this.addList = addList;
        this.deleteList = deleteList;

    }

}