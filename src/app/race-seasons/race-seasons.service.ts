import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, EMPTY, map, throwError } from 'rxjs';
import { ApiResponse, Season } from './api-response.model';

@Injectable({
  providedIn: 'root',
})
export class RaceSeasonsService {
  raceSeasons = new BehaviorSubject<Season[]>([]);

  constructor(private readonly http: HttpClient) {}

  raceSeasons$ = this.http
    .get<ApiResponse>('http://ergast.com/api/f1/seasons.json')
    .pipe(
      map((data: ApiResponse) => {
        return data.MRData.SeasonTable.Seasons;
      }),
      catchError((err) => {
        const errorMsg = 'Something went wrong';
        console.log(err);
        return throwError(() => errorMsg);
      })
    );
}
