import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';

@Component({
  moduleId: module.id,
  selector: 'ng-2-observables-app',
  templateUrl: 'ng-2-observables.component.html',
  styleUrls: ['ng-2-observables.component.css']
})
export class Ng2ObservablesAppComponent implements OnInit {
  addItemKeyup$ = new Subject<any>();
  filterItemKeyup$ = new Subject<any>();
  
  allItems;
  filteredItems;
  
  ngOnInit() {
    var addItem$ = this.addItemKeyup$
      .filter(x => x.keyIdentifier === 'Enter')
      .pluck('target', 'value')
      .startWith('John', 'Paul', 'Ringo');
      
    var filter$ = this.filterItemKeyup$
      .pluck('target', 'value')
      .map((x:any) => x.toLowerCase())
      .startWith('');
      
    var allItem$ = addItem$
      .scan((acc, val) => [...acc, val], [])
      
    allItem$.subscribe(x => this.allItems = x);
      
    allItem$.combineLatest(filter$, (items, filterValue) => {
        if (filterValue === '') {
          return items;
        }
        
        return items.filter(i => i.toLowerCase().indexOf(filterValue) > -1);
      }).subscribe(x => this.filteredItems = x);
  }
  
}
