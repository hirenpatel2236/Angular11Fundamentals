import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    currentUser: IUser
    loginUser( userName: string, password: string){
        this.currentUser = {
            id: 1,
            firstName: "Hiren",
            lastName: "Patel",
            userName: "HPatel"
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}