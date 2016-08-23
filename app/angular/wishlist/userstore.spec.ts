import {
    describe,
    it
} from '@angular/core/testing';
import {UserStore} from '../../../app/angular/wishlist/userstore';
import {User} from '../../../app/angular/wishlist/user';
import Spy = jasmine.Spy;

class TestUtils {

    mockWindowFetch({responseData=null, responseStatus=null}) {

        spyOn(window, 'fetch').and.returnValue(new Promise((resolve, reject) => {
            resolve({
                json: () => {
                    return new Promise(resolve => resolve(responseData));
                },
                status: responseStatus
            })
        }));

    }

}

describe('UserStore', () => {

    it('should load user list', (done) => {

        let userStore = new UserStore();

        /*
         * Mocking `window.fetch`.
         */
        new TestUtils().mockWindowFetch({
            responseData: {
                objects: [{firstName: 'Foo'}]
            },
            responseStatus: 200
        });

        /*
         * Calling `UserStore.userList`.
         */
        userStore.userList().then(userList => {

            /* Checking mock calls. */
            expect((<Spy>window.fetch).calls.count()).toEqual(1);
            expect((<Spy>window.fetch).calls.argsFor(0)).toEqual(['/api/v1/users/']);

            /*  */
            expect(userList.length).toEqual(1);
            expect(userList[0].firstName).toEqual('Foo');

            done();

        });


    });

    it('should handle api error', (done) => {

        let userStore = new UserStore();

        new TestUtils().mockWindowFetch({
            responseData: null,
            responseStatus: 404
        });

        userStore.userList().catch(error => {

            expect(error).not.toEqual(null);

            done();

        });


    });


    it('should add a user', (done) => {

        let userStore = new UserStore();

        /*
         * Mocking `window.fetch`.
         */
        new TestUtils().mockWindowFetch({
            responseData: {
                id: '123456',
                firstName: 'patrice',
                lastName: 'rolland'
            },
            responseStatus: 200
        });

        /*
         * Calling `UserStore.userList`.
         */

        userStore.addUser(new User({id:'123456',firstName:"patrice",lastName:"rolland"})).then((user: User) => {

            /* Checking mock calls. */
            expect((<Spy>window.fetch).calls.count()).toEqual(1);
            expect((<Spy>window.fetch).calls.argsFor(0)[0]).toEqual('/users');
            expect((<Spy>window.fetch).calls.argsFor(0)[1].method).toEqual('POST');
            expect((<Spy>window.fetch).calls.argsFor(0)[1].headers)
                .toEqual({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                });


            /*  */
            expect(user.id).toEqual('123456');
            expect(user.firstName).toEqual('patrice');
            expect(user.lastName).toEqual('rolland');

            done();

        });


    });



});
