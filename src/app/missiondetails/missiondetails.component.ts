import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  flightNumber: any;
  missionDetails: any

  constructor(private route: ActivatedRoute, private apiService: SpacexapiService) { }

  ngOnInit(): void {
    this.getMissionDetails();
  }

  getMissionDetails(): void {
    this.flightNumber = parseInt(this.route.snapshot.paramMap.get('flightNumber')!);
    this.apiService.getMissionDetails(this.flightNumber).subscribe({
      next: (res: any) => {
        console.log(res)
        this.missionDetails = res
        console.log(this.missionDetails)
      },
      complete: () => {
        console.log("Complete")
      },
      error: (err: any) => {
        console.log("Error", err)
      }
    });
  }
}
