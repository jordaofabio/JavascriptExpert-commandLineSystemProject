import database from '../database.json';
import TerminalController from './terminalController.js';
import Person from './person.js';
const DEFAULT_LANG = 'pt-BR';



const terminalController =  new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);

async function mainLoop() {
    try {
        const answer = await terminalController.question('What???')
    } catch (error) {

    }
}


await mainLoop()







