import {Component} from '@angular/core';
import {User} from './user';
import {UserStore} from './user';
import {UserinfoComponent} from "./userinfo.component";
import {UserFormComponent} from "./userform.component";

@Component({
    directives: [UserinfoComponent,UserFormComponent],
    providers: [
      UserStore
    ],
    selector: 'wt-app',
    templateUrl: require('./wishlist.component.html')
})
export class WishlistComponent {

    currentUser:User;
    userStore:UserStore= new UserStore();

    constructor() {
        this.currentUser=null;
        let us1 = new User({
            firstName: 'Foo',
            lastName: 'BAR',
            email: 'foo@bar.com'
        });
        let us2 = new User({
            firstName: 'Patrice',
            lastName: 'Rolland',
            email: 'prolland@bar.com'
        });
        let us3 = new User({
            firstName: 'truc',
            lastName: 'much',
            email: 'truc@bar.com'
        });
        this.userStore.addUser(us1);
        this.userStore.addUser(us2);
        this.userStore.addUser(us3);
        console.log( this.userStore.userList());
    }

    resetUser() {
        console.log('reset user');
        this.currentUser=new User("");
    }

    addUser(user:User) {
        console.log('add user');
        if (this.currentUser==null) {
            console.log('userstore.add user');
            this.userStore.addUser(user);
        } else {
            console.log('userstore.replace user');
            this.userStore.replaceUser(this.currentUser, user);
        }
        this.currentUser=null;
    }


    editUser(user:User) {
        this.currentUser=user;
    }

    removeUser(user:User) {
        this.userStore.removeUser(user);
        console.log( this.userStore.userList());
    }

}