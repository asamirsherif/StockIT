import { Component, OnInit } from '@angular/core';
import { User } from 'app/auth/models';
import { UserservService } from 'app/auth/service/user/userserv.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _userService:UserservService) { }

  user: User;
  image: any;

  ngOnInit(): void {
    this.profileData()
  }

  profileData() {
    const observer = {
        next: (res) => {
            this.user = res
            if(res.avatar == "no_avatar.png" ){
                this.image = `${environment.apiUrl}/images/users/person.png`
            }else{
                this.image = `${environment.apiUrl}/${res.avatar}`
            }
        },
        error: (error) => {
            console.log(error);
        },
    };
    this._userService.getAuthUser().subscribe(observer);
}
}
