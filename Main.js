const SpareTire = require('./Domain/SpareTire');
const forwardSearch = require('./Planner/Search/ForwardSearch');

const main = () => {
    let spareTire = new SpareTire();
    forwardSearch(spareTire);
}

main();
