import { GrouppermissionservService } from './../../../auth/service/permission/grouppermissionserv.service';
import { Component, OnInit } from '@angular/core';
import { Irole } from 'app/interfaces/irole';

@Component({
  selector: 'app-grouppermission',
  templateUrl: './grouppermission.component.html',
  styleUrls: ['./grouppermission.component.scss']
})
export class GrouppermissionComponent implements OnInit {
 role: Irole[];
 searchInput = "";

 p: number = 1;
  total: number = 0;
  constructor(private roleserv:GrouppermissionservService) { }

  ngOnInit(): void {
    this.getall();
  }
  getall() {
    //then
    const observer = {
      next: (res) => {
        this.role = res.data
        console.log(this.role)
      },
      error: (error) => {
        console.log(error);

      }
    }

    //first
    this.roleserv.allRole().subscribe(observer)
  }


  destroy(id: number) {
    const observer = {
      next: (res) => {
        console.log(id);
        this.getall();
      },
      error: (error) => {
        console.log(error)
      }
    }
    this.roleserv.deleteRole(id).subscribe(observer)

  }
  search(event) {
    this.roleserv.params = this.roleserv.params.set("search", event)
    this.getall()
  }
  pageChangeEvent(event: number) {
    this.p = event;
    this.getall();
  }
}
