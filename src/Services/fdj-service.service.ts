import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FdjServiceService {

  constructor(private http: HttpClient) { }

  getAllLeagues():Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/all_leagues.php`).pipe(
      map((result => result['leagues'].map((item:any) => item['strLeague'])))
      )
  }

  getAllTeams(str :string):Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/search_all_teams.php?l=${str}`).pipe(
      map(r => r['teams'])
    )
  }

  getSearchTeam(str:string):Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/searchteams.php?t=${str}`).pipe(
      map(r => r['teams'])
    )
  }


}
