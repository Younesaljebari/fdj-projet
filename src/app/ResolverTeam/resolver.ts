import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of} from 'rxjs';
import { FdjServiceService } from 'src/Services/fdj-service.service';

@Injectable()
export class Resolver  implements Resolve<any[]> {

    constructor(private myService : FdjServiceService, private route : ActivatedRoute) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
      
      let param = route.params['id'];
      if(param) {
        return this.myService.getSearchTeam(param);
      }
      else return of([])
      
    }
}
