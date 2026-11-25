import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {NavBar} from './components/nav-bar/nav-bar';
import {Footer} from './components/footer/footer';
import {Notificationlist} from './components/notificationlist/notificationlist';
import {ProfileUser} from './components/profile-user/profile-user';
import {Friendslist} from './components/friendslist/friendslist';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer , NavBar,ProfileUser,Friendslist,ConferenceList,Notificationlist,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Projet');
}
