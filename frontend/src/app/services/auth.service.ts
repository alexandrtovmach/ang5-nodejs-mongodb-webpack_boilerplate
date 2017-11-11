import { Injectable } from '@angular/core';
import { WindowObj } from './window.service';

@Injectable()


export class AuthService {

    constructor(public window: WindowObj) {}

    isLoggedIn() {
        if (this.window.data._injectedData.isLoggedIn) {
            return true;
        }
        return false;
    }

    isAdmin() {
        if (this.window.data._injectedData.isAdmin) {
            return true;
        }
        return false;
    }

    getUserId() {
        return this.window.data._injectedData.userId;
    }
}
