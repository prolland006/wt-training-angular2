import {Component} from '@angular/core';
import {User} from './user';
import {UserStore} from './user';
import {UserinfoComponent} from "./userinfo.component";
import {UserFormComponent} from "./userform.component";

@Component({
    directives: [UserinfoComponent,UserFormComponent],
    selector: 'wt-app',
    templateUrl: require('./wishlist.component.html')
})
export class WishlistComponent {

    currentUser:User=new User("");
    selUser:null;
    userStore:UserStore= new UserStore();
    buttonLabel:String="ADD";

    constructor() {
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



    editUser(user:User) {
        this.currentUser=new User(user);
        this.selUser=user;
        this.buttonLabel="SAVE";
    }

    removeUser(user:User) {
        this.userStore.removeUser(user);
        console.log( this.userStore.userList());
    }

}