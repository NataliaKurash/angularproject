import { Component, OnDestroy, OnInit } from "@angular/core";
import { UsersService } from "../users/users.service";
@Component({
    selector: 'wsb-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
    public users: any = [];
    ngOnDestroy(): void {
    }
    constructor(public usersService: UsersService) {

    }
    public ngOnInit(): void {
        console.log('HomeCOmponent jest gotowy');
        this.usersService.getUsers()
            .then(response => {
                this.users = response;
            })
    }
}