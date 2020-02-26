import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
    disableSelect = new FormControl(false);
  toppings = new FormControl();

  // toppingList: string[] = ['test 1', 'test 2', 'test 3'];

  myControl = new FormControl();
  options: User[] = [
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'}
  ];
  filteredOptions: Observable<User[]>;
  favoriteSeason: string;
  seasons: string[] = ['Option 1', 'Option 2', 'Option 3'];
panelOpenState = false;
search_placeholder = null;

setVal(e){
  console.log(e)
  this.search_placeholder = e.value;
}

  ngOnInit() {
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  // }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */