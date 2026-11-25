import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  imports: [],
  templateUrl: './profile-user.html',
  styleUrl: './profile-user.css',
})
export class ProfileUser {
  name : string = "Oumayma"
  email = signal("oumayma.miladi@esprit.tn")
}

