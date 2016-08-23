//import {Injectable} from "@angular/core";
type Email = string;
type UserSchema = {firstName?: string, lastName?: string, email?: Email, birthday?: Date};

export class User {

    firstName: string;
    lastName: string;
    email: Email;
    birthday: Date;
    id:string;

    constructor({firstName = null, lastName = null, email = null, birthday = null, id=null}: UserSchema) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
        this.id = id;
    }

    isEqual(user: User) {
        return this === user;
    }

}

interface IUserStore {

    /**
     * Add user to list.
     * @param user
     */
    addUser(user: User): void; // 2nd step

    /**
     * Remove user from list.
     * @param user
     */
    removeUser(user: User): void; // 3rd step

    /**
     * Return users list.
     */
    userList(): User[]; // 1st step

}

//@Injectable()
export class UserStore implements IUserStore {
/*
    static Providers {
        Http
    }
*/
    private _userList: User[] = [];

    addUser(user: User): void {
        this._userList.push(user);
    }

    removeUser(user: User): void {
        this._userList = this._userList.filter(userIterator => !userIterator.isEqual(user));
    }

    userList(): User[] {
        return this._userList;
    }

    replaceUser(replacedUser: User, newUser:User): void {
/*        let resultList :User[];
        resultList = this._userList.filter(userIterator => userIterator.isEqual(replacedUser));
        console.log(resultList.length);
        if (resultList.length!=0) {
            this.removeUser(resultList[0]);
            this.addUser(newUser);
        }*/

        this._userList = this._userList.map(userIterator => userIterator.isEqual(replacedUser)?newUser:userIterator);

    }

}


let user1 = new User({
    firstName: 'Foo',
    lastName: 'BAR',
    email: 'foo@bar.com'
});

let user2 = new User(user1);

let userStore = new UserStore();

user2.firstName = 'John';

userStore.addUser(user1);
userStore.addUser(user1);
userStore.addUser(user1);

userStore.addUser(user2);

console.log(userStore.userList());

userStore.removeUser(user1);

console.log(userStore.userList());