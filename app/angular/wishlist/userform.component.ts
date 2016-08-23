import {Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'wt-userform',
    templateUrl: require('./userform.component.html'),
    /*encapsulation : ViewEncapsulation.None,  //css que sur cette page
    style : [
        require('...css')
    ]*/
})
export class UserFormComponent implements OnChanges {

    @Input() user:User;
    @Output() userChange = new EventEmitter<User>();
    @Output() userReset = new EventEmitter();

    resetUser() {
        console.log("resetUser");
        /** modification output*/
        this.userReset.emit(null);
    }

    saveUser(user:User) {
        console.log(user.firstName);
        console.log("saveUser"+user.firstName);
        /** modification output*/
        this.userChange.emit(user);
    }

    /** callback changement du composant parent*/
    ngOnChanges(changes) {
        if (changes.user) {
            console.log('change');
            this.user = new User(changes.user.currentValue || {});
        }

    }
}