const SpareTire = require('./Domain/SpareTire');
const BlockWorld = require('./Domain/BlocksWorld');
const forwardSearch = require('./Planner/Search/ForwardSearch');

const main = () => {
    // // spareTire forward search without heuristic
    // let spareTire = new SpareTire();
    // forwardSearch(spareTire);
    // // spareTire forward search without heuristic

    // blockWorld forward search without heuristic
    let blockword = new BlockWorld();
    forwardSearch(blockword);
    // blockWorld forward search without heuristic

}

main();
