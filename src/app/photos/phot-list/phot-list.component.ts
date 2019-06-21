import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phot-list',
  templateUrl: './phot-list.component.html',
  styleUrls: ['./phot-list.component.css']
})
export class PhotListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params.username;
    this.photoService
      .listFromUser(username)
      .subscribe(photos => {
        this.photos = photos
      });
  }

}
