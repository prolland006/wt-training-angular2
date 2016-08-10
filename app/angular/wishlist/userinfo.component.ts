import {Component, Input} from '@angular/core';
import {User} from './user';

@Component({
    selector: 'wt-userinfo',
    templateUrl: require('./userinfo.component.html')
})
export class UserinfoComponent {

    @Input() user:User;
}