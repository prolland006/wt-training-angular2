

type Email = string;
type UserSchema = {firstName?: string, lastName?: string, email?: Email, birthday?: Date};

class User {

    firstName: string;
    lastName: string;
    email: Email;
    birthday: Date;

    constructor({firstName = null, lastName = null, email = null, birthday = null}: UserSchema) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthday = birthday;
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

class UserStore implements IUserStore {

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