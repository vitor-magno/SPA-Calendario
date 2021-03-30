import { Component } from '@angular/core';

import { CalendarOptions } from '@fullcalendar/angular'; // useful 
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  locales = [ptBrLocale];

  calendarOptions: CalendarOptions = {
    // -- aparece a semana
    initialView: 'dayGridWeek', 
    // dayGridMonth - aparece o mes
    locale: ptBrLocale,
    //dateClick: this.handleDateClick.bind(this), // bind is important!
    dayMaxEvents: true,
    hiddenDays: [ 0, 6 ],
    events: [
      { title: 'event 1', date: '2021-02-20 09:00:00' },
      { title: 'event 2', date: '2021-02-21 11:00:00' },
      { title: 'event 2', date: '2021-02-22 12:00:00' },
      { title: 'event 2', date: '2021-02-23 13:00:00' },
      { title: 'event 2', date: '2021-02-24 14:00:00' },
      { title: 'event 2', date: '2021-02-18 15:00:00' },
      { title: 'event 2', date: '2021-02-15 16:00:00' }
    ]
  };

}
