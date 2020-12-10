import {AfterViewInit, Component, ElementRef} from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService} from '../_services';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
export class HomeComponent {
    loading = false;
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
        });
    }
    like() {
        document.getElementsByClassName('like')[0].classList.toggle('like-active');
    }
}
