import {addExitCallback} from '../src';

addExitCallback(() => {
    console.log('even though async stuff does not work, this at least seems to');
});

process.exit(0);
