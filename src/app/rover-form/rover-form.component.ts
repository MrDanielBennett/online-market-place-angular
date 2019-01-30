import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-rover-form',
  templateUrl: './rover-form.component.html',
  styleUrls: ['./rover-form.component.css'],
  providers: [ MarsRoverApiPhotosService ]
})

export class RoverFormComponent {
  photos: any[]=null;
  constructor(private marsRoverPhotosService: MarsRoverApiPhotosService) { }

  getRoverImages(date: string, camera: string) {
    this.marsRoverPhotosService.getByDateAndCamera(date, camera).subscribe(response => {
      this.photos = response.json();
    });
  }

  ngOnInit() { }

}
