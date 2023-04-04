import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private httpClient: HttpClient) { }

  public displayAllLaunches() {
    return this.httpClient.get("https://api.spacexdata.com/v3/launches").pipe(retry(3))
  }

  public missionFilter(year: number) {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`).pipe(retry(3))
  }

  public getMissionDetails(flightNumber: number) {
    return this.httpClient.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`).pipe(retry(3))
  }
}
