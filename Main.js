const SpareTire = require('./Domain/SpareTire');
const BlockWorld = require('./Domain/BlocksWorld');
const MonkeyAndBananas = require('./Domain/MonkeyAndBananas');
const LinkRepeat = require('./Domain/LinkRepeat');
const forwardSearch = require('./Planner/Search/ForwardSearch');

const main = () => {
    // // spareTire forward search without heuristic
    // let spareTire = new SpareTire();
    // forwardSearch(spareTire);
    // // spareTire forward search without heuristic

    // // blockWorld forward search without heuristic
    // let blockword = new BlockWorld();
    // forwardSearch(blockword);
    // // blockWorld forward search without heuristic

    // // MonkeyAndBananas forward search without heuristic
    // let monkeyAndBananas = new MonkeyAndBananas();
    // forwardSearch(monkeyAndBananas);
    // // MonkeyAndBananas forward search without heuristic

    // LinkRepeat forward search without heuristic
    let linkRepeat = new LinkRepeat(9);
    forwardSearch(linkRepeat);
    // LinkRepeat forward search without heuristic

}

main();
