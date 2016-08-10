import {Component, Input} from '@angular/core';
import {User} from './user';
import {UserStore} from './user';

@Component({
    selector: 'wt-userform',
    templateUrl: require('./userform.component.html')
})
export class UserFormComponent {

    @Input() currentUser:User;
    @Input() selUser:User;
    @Input() userStore:UserStore;

    addUser(user:User) {
        if (this.selUser!=null) {
            console.log("replace");
            this.userStore.replaceUser(this.selUser,this.currentUser);
        } else {
            this.userStore.addUser(user);
        }
        this.selUser=null;
        this.currentUser=new User("");
    }
}