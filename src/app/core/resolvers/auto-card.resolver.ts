import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutoListService } from 'src/app/pages/auto-list/auto-list.service';
import { Auto } from 'src/app/shared/models/auto';

@Injectable()
export class AutoCardResolver implements Resolve<Auto> {
    constructor(private autoListService: AutoListService,
                private router: Router) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Auto> {
        return this.autoListService.getAuto(route.params.id).pipe(
            catchError(error => {
                this.router.navigate(['/login']);
                return of(null);
            })
        );
    }
}
