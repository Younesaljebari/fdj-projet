import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-details-equipe',
  templateUrl: './details-equipe.component.html',
  styleUrls: ['./details-equipe.component.scss']
})
export class DetailsEquipeComponent implements OnInit {
  teams$: Observable<any>
  teams : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log( " this.route.data  ", this.route.data)
    this.teams$ = this.route.data
    this.teams$.subscribe( r => {
      console.log("r",r.teams)
      this.teams = r.teams[0];
      console.log("this.teams",this.teams)
    })
  }

}
