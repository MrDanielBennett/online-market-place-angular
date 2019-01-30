import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-deatail',
  templateUrl: './album-deatail.component.html',
  styleUrls: ['./album-deatail.component.css'],
  providers: [AlbumService]
})


export class AlbumDeatailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private ablumService: AlbumService
  ) {}


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.albumToDisplay = this.ablumService.getAlbumById(this.albumId);
  }

}
