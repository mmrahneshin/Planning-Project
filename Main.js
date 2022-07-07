const SpareTire = require('./Domain/SpareTire');
const BlockWorld = require('./Domain/BlocksWorld');
const MonkeyAndBananas = require('./Domain/MonkeyAndBananas');
const LinkRepeat = require('./Domain/LinkRepeat');
const DinnerDate = require('./Domain/DinnerDate');
const forwardSearch = require('./Planner/Search/ForwardSearch');
const forwardSearchWithHPre = require('./Planner/Search/ForwardSearchWithHPre');
const forwardSearchWithHDel = require('./Planner/Search/forwardSearchWithHDel');

const main = () => {
    let start;
    let finish;
    // // spareTire forward search without heuristic
    // start = performance.now();
    // let spareTire = new SpareTire();
    // forwardSearch(spareTire);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // spareTire forward search without heuristic

    // // SpareTire forward search with ignorePrecondition heuristic
    // start = performance.now();
    // spareTire = new SpareTire();
    // forwardSearchWithHPre(spareTire);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // SpareTire forward search with ignorePrecondition heuristic


    // // blockWorld forward search without heuristic
    // start = performance.now();
    // let blockworld = new BlockWorld();
    // forwardSearch(blockworld);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // blockWorld forward search without heuristic

    // // BlockWorld forward search with ignorePrecondition heuristic
    // start = performance.now();
    // blockworld = new BlockWorld();
    // forwardSearchWithHPre(blockworld);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // BlockWorld forward search with ignorePrecondition heuristic


    // MonkeyAndBananas forward search without heuristic
    // start = performance.now();
    // let monkeyAndBananas = new MonkeyAndBananas();
    // forwardSearch(monkeyAndBananas);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // MonkeyAndBananas forward search without heuristic

    // // MonkeyAndBananas forward search with ignorePrecondition heuristic
    // start = performance.now();
    // let monkeyAndBananas = new MonkeyAndBananas();
    // forwardSearchWithHPre(monkeyAndBananas);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // MonkeyAndBananas forward search with ignorePrecondition heuristic

    // // LinkRepeat forward search without heuristic
    // start = performance.now();
    // let linkRepeat = new LinkRepeat(7);
    // forwardSearch(linkRepeat);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // LinkRepeat forward search without heuristic

    // // LinkRepeat forward search with ignorePrecondition heuristic
    // start = performance.now();
    // linkRepeat = new LinkRepeat(7);
    // forwardSearchWithHPre(linkRepeat);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // LinkRepeat forward search with ignorePrecondition heuristic


    // // DinnerDate forward search without heuristic
    // start = performance.now();
    // let dinnerDate = new DinnerDate();
    // forwardSearch(dinnerDate);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // DinnerDate forward search without heuristic

    // // DinnerDate forward search with ignorePrecondition heuristic
    // start = performance.now();
    // let dinnerDate = new DinnerDate();
    // forwardSearchWithHPre(dinnerDate);
    // finish = performance.now();
    // console.log("duration:" + (finish - start));
    // // DinnerDate forward search with ignorePrecondition heuristic



}

main();
