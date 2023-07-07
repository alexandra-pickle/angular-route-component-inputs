import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-race-season-details',
  template: ` <a [routerLink]="['/races']">All seasons</a>
    <h4>Race season: {{ input }}</h4>`,
  styleUrls: [],
  standalone: true,
  imports: [RouterModule],
})
export class RaceSeasonDetailsComponent {
  @Input()
  input?: string;
}
