import { Component } from '@angular/core';
import { RaceSeasonsService } from './race-seasons.service';

@Component({
  selector: 'app-race-seasons',
  template: ` <div class="container">
    <h4>Race Seasons</h4>
    <div class="season" *ngFor="let raceSeason of raceSeasons$ | async">
      <a [routerLink]="[raceSeason?.season]">{{ raceSeason.season }}</a>
    </div>
  </div>`,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        padding: 24px;
      }

      .season {
        display: flex;
        flex-direction: row;
        padding: 8px;
      }
    `,
  ],
})
export class RaceSeasonsComponent {
  raceSeasons$ = this.raceSeasonsService.raceSeasons$;

  constructor(private readonly raceSeasonsService: RaceSeasonsService) {}
}
