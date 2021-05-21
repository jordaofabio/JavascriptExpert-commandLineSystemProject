import database from '../database.json';
import TerminalController from './terminalController.js';
import Person from './person.js';
const DEFAULT_LANG = 'pt-BR';
const STOP_TERMINAL = ':q';



const terminalController =  new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
    try {
        const answer = await terminalController.question('');
        if (answer === STOP_TERMINAL) {
            console.log('process finished!');
            terminalController.closeTerminal();
            return;
        }

        const person = Person.generateInstanceFromString(answer);
        console.log('person', person.formatted('pt-BR'));
        return mainLoop();

    } catch (error) {
        console.log('DEU RUIM', error);
        return mainLoop();
    }
}


await mainLoop()







