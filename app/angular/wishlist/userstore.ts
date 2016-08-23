
import {User} from './user';

export class UserStore {

    userList(): Promise<any[]> {

        return window.fetch('/api/v1/users/')
            .then(response => {

                if (response.status >= 400) {
                    throw new Error('Invalid server response.');
                }
                return response.json();

            })
            .then(data => data['objects']);

    }

    addUser(user:User): Promise<User> {

        return window.fetch('/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => {

                if (response.status >= 400) {
                    throw new Error('Invalid server response.');
                }
                return response.json();

            })
            .then(data => new User(data));
    }


}