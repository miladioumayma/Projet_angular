import { Component } from '@angular/core';

@Component({
  selector: 'app-notificationlist',
  imports: [],
  templateUrl: './notificationlist.html',
  styleUrl: './notificationlist.css',
})
export class Notificationlist {
  showNotifications: boolean=false 
  show(){
      this.showNotifications=! this.showNotifications; 
  }
}
