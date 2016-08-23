/*import {
    beforeEach,
    afterEach,
    it,
    expect,
    inject
} from '@angular/core/testing;'
*/
import {Util} from './util';

describe('Util', () => {

    beforeEach(()=> {

    });

    afterEach(()=> {

    });


    //spyOn(window, 'fetch').and.returnValue(...);

    it('should be able to truncate', function shouldBeAbleToTruncate() {

        //expect((<Spy>window.fetch).calls.count()).toEqual(1);


        var util = new Util();

        expect(util.truncate('toto',8,'...')).toEqual('TOTO');
        expect(util.truncate('georgeopoulos',8,'...')).toEqual('GEORG...');
        expect(util.truncate('toto',4,'...')).toEqual('TOTO');
        expect(util.truncate('georgeopoulos',4,'...')).toEqual('G...');

        expect(function () { util.truncate('georgeopoulos',2,'...') }).toThrow(new Error('replace string length should be less than maxlength.'));
        expect(function () { util.truncate('',2,'...') }).toThrow(new Error('empty is not a valid string.'));
        expect(function () { util.truncate(null,2,'...') }).toThrow(new Error('null is not a valid string.'));
        expect(function () { util.truncate(undefined,2,'...') }).toThrow(new Error('null is not a valid string.'));
        expect(function () { util.truncate('toto',-2,'...') }).toThrow(new Error('negativ maxlength parameter is not a valid.'));

    });

});