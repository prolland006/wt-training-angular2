/**
 * Created by wishtack on 16/08/16.
 */

import {Component, Input} from '@angular/core';

export class Util {

    constructor() {
    }

    truncate(st:String,maxLength:number,replacementString:String) {
        let result='';
        if (st==null) {
            throw new Error('null is not a valid string.')
        }
        if (st==='')throw new Error('empty is not a valid string.')
        if (maxLength<0)throw new Error('negativ maxlength parameter is not a valid.')
        let stUpper=st.toUpperCase();
        if (stUpper.length+-replacementString.length>maxLength-replacementString.length) {
            result=stUpper.substr(0,maxLength-replacementString.length)+replacementString;
        } else {
            result=stUpper;//.substr(0,maxLength-replacementString.length);
        }

        if (replacementString.length>maxLength) { //
            throw new Error('replace string length should be less than maxlength.')
        }
        return result;
    }
}
