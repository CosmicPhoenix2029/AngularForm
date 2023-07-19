import { Component } from '@angular/core';
import { ticket } from 'src/ticket';
@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {
  
  submitted = false;
  onSubmit() { this.submitted = true; }

  contactPreferences = ['phone', 'email', 'MS Teams'];
  ticketChannels = ['phone', 'portal', 'events management', 'email', 'self service', 'MS Teams'];
  catagories = ['advice', 'networking', 'software', 'hardware'];
  teams = ['1st Line', '2nd Line', '3rd Line', 'Application development', 'data management'];

  model = new ticket(
    'example User', 
    'example.email@example.com', 
    'example organisation',
    'example room name',
    'example Building name',
    '01234 567890',
    '01234 567890',
    this.contactPreferences[0],
    'example subject',
    'example description',
    'example tech notes',
    this.ticketChannels[5],
    false,
    'ABC123456',
    this.catagories[0],
    this.teams[3],
    1
    );

    /*creating an example ticket to display on screen, this would not be done normally
    usually, you would use dependancy injection to inject a data service to get and save real data
    */
}
