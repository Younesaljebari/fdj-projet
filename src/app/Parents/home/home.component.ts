import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FdjServiceService } from 'src/Services/fdj-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  formGroup : FormGroup;
  listLeagues : string[];
  listEquipes$ : Observable<any[]>;
  listEquipes : BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); 

  constructor(private service : FdjServiceService, private fb : FormBuilder) { }



  ngOnInit() {
    this.initForm();
    this.getAllLeaques();
  }

  initForm(){
    this.formGroup = this.fb.group( {
      'league' : ['']
    })
    this.formGroup.get('league')?.valueChanges.subscribe(
      resp => {
        console.log("data", resp)
        this.filterLeagues(resp)
      }
    )
  }

  filterLeagues(data:any){
    this.listLeagues = this.options.filter(
      i => {
        return i.toLowerCase().indexOf(data.toLowerCase()) > -1
      }
    )
  }

  getAllLeaques(){
    this.service.getAllLeagues().subscribe(
      r => {
        this.options = r; 
        this.listLeagues = r;
      }
    )
  }

  sendSearch(){
    let data = this.formGroup.get('league')?.value
    console.log("data", this.formGroup.get('league'))
    console.log("data", data)
    this.listEquipes$ = this.service.getAllTeams(data).pipe( map(
      list => list.reverse()
    ))
  }
  
  sendEquipe(team:any){
    console.log("team", team)
  }
}
