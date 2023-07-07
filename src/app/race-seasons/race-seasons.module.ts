import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RaceSeasonsComponent } from './race-seasons.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [RaceSeasonsComponent],
  exports: [RaceSeasonsComponent],
})
export class RaceSeasonsModule {}
