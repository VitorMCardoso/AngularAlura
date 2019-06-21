import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root' })
export class PhotListResolver implements Resolve<Observable<Photo[]>>{

    resolve(ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        throw new Error('Method not implemented.');
    }

    constructor(private service: PhotoService) {

    }
}