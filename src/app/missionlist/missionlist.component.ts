import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpacexapiService } from '../spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];
  filteredMissions: any;
  years: number[] = [];

  constructor(private spacexapiService: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.spacexapiService.displayAllLaunches()
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.missions = res
          console.log(this.missions)
        },
        complete: () => {
          console.log("Complete")
        },
        error: (err: any) => {
          console.log("Error", err)
        }
      });

    this.generateYears()
  }

  generateYears() {
    for (let i = 2006; i <= 2020; i++) {
      this.years.push(i);
    }
  }

  filterMissions(year: number) {
    this.spacexapiService.missionFilter(year).subscribe({
      next: (res: any) => {
        console.log(res)
        this.missions = res
        console.log(this.missions)
      },
      complete: () => {
        console.log("Complete")
      },
      error: (err: any) => {
        console.log("Error", err)
      }
    });
  }

  onMissionDetails(flightNumber: string) {
    // this.router.navigateByUrl(`/missiondetails/${flightNumber}`);
    window.location.href = `/missiondetails/${flightNumber}`;
  }


  reloadComponent() {
    window.location.reload();
  }
}
