
import { Component,signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, FormsModule, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {

  // Champ de recherche
  searchTerm: string = '';
  now: Date = new Date();

  // Liste des conférences
  list: Conference[] =  [
    {
      id: 1,
      title: 'Angular Development',
      description: 'Une conférence sur le développement Angular.',
      date: new Date('2026-12-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 60
    },
    {
      id: 2,
      title: 'Artificial Intelligence',
      description: 'Une conférence sur l intelligence artificielle.',
      date: new Date('2027-01-20'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 45
    },
    {
      id: 3,
      title: 'Big Data',
      description: 'Une conférence sur le Big Data.',
      date: new Date('2027-02-10'),
      place: 'Sfax',
      maxParticipants: 30,
      nbParticipants: 30
    }
  ];

  // Recherche d'une conférence par son titre
  searchConference() {
    return this.list.filter(c =>
      c.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Calculer le nombre de places restantes
  getPlacesRestantes(conference: Conference): number {
    return conference.maxParticipants - conference.nbParticipants; 
  }

  // Inscription à une conférence
  inscrire(conference: Conference) {
    if (this.getPlacesRestantes(conference) > 0) {
      conference.nbParticipants++;
    }
  }
    // Conférence sélectionnée, transmise à l'enfant
  selectedConference = signal<Conference | null>(null);

  selectConference(conference: Conference) {
    this.selectedConference.set(conference);
  }

  // Appelée quand l'enfant émet (closed)
  clearSelection() {
    this.selectedConference.set(null);
  }
}
