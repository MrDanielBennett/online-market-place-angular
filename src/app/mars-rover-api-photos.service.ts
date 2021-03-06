import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarsRoverApiPhotosService {

  getByDateAndCamera(date: string, camera: string) {
  return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&&api_key=OIeHN15r7wFtwgSx0xdgarEMmvo4k6WHjvU5mACJ`)
}

  constructor(private http: Http) { }

}
