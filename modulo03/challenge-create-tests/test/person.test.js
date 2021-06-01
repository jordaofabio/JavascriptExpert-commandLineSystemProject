import mocha from 'mocha';
const { describe, it } =  mocha;
import chai from 'chai';
const { expect } = chai;
import Person from './../src/person.js';

describe('Person', () => {
    it('Should return a person instance from a string', () => {
        const person = Person.generateInstanceFromString(
            '2 Bike,Aviao,Navio 20000000 2000-01-01 2002-02-01'
        );

        const expected = {
            from: '2000-01-01',
            to: '2002-02-01',
            kmTraveled: '20000000',
            vehicles: ['Bike','Aviao','Navio'],
            id: '2'
        }

        expect(person).to.be.deep.equal(expected);
    });

    it('Shoud format values', () => {
        const result = new Person({
            from: '2000-01-01',
            to: '2002-02-01',
            kmTraveled: '20000000',
            vehicles: ['Bike','Aviao','Navio'],
            id: '2'
        }).formatted('pt-BR');


        const expected = {
            id: 2,
            vehicles: 'Bike, Aviao e Navio',
            kmTraveled: '20.000.000 km',
            from: '01 de janeiro de 2000',
            to: '01 de fevereiro de 2002'
          }

    expect(result).to.be.deep.equal(expected);

    })
})