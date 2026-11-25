import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-friendslist',
  imports: [FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friendName : string =""
  friendsList : string[] =["Imen","Amine","Emna","Oumayma"]

}
