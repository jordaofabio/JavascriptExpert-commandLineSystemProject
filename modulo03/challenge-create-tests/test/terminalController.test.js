import mocha from 'mocha';
const { describe, it, before, beforeEach, afterEach } =  mocha;
import chai from 'chai';
const { expect } = chai;
import sinon from 'sinon';
import TerminalController from './../src/terminalController.js';
import mockData from './mocks/data.js';
import chalkTable from 'chalk-table';
import data from './mocks/data.js';

const mocks = {
    mockData,
    DEFAULT_LANG: 'pt-BR'

};


describe.only('TerminalController Suite Tests', () => {
    let terminalController = {};
    let sandbox = {};

    before(() => {
        terminalController = new TerminalController();
    });

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('initializeTable must return data to fill a table on terminal', () => {
        

        const result = terminalController.initializeTable(mocks.mockData, mocks.DEFAULT_LANG)
        const expected = terminalController.data;
        expect(result).to.be.equal(expected)
    });

    it('Ao chamar o initializeTerminal', () => {
        
    });

});
