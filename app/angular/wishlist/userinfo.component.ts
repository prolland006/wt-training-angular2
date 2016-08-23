import {Component, Input, Pipe} from '@angular/core';
import {User} from './user';
import * as _ from 'lodash';


class userNameParameter {
    maxLength:number;
    minSize:number;
    finalString:string;
}

@Pipe({
    name: 'pipeUserName'
})
class pipeUserName {

    transform(user:User,userParam:userNameParameter) {
        let st=user.lastName.toUpperCase();
        if (st.length>userParam.maxLength) {
            st=st.substr(0,userParam.minSize)+userParam.finalString;
        }
        if (user.firstName.trim().length>0)
            st=user.firstName.trim()[0].toUpperCase()+'.'+st;
        return st;
    }
}

@Component({
    pipes: [pipeUserName],
    selector: 'wt-userinfo',
    templateUrl: require('./userinfo.component.html')
})
export class UserinfoComponent {

    @Input() user:User;
}