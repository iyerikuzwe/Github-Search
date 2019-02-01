import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
