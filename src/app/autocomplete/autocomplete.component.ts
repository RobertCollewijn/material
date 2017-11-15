import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();

  options = [
    'One a',
    'Two b',
    'Three c',
    'Four d',
    'Five e'
  ];

  filteredOptions: Observable<string[]>;

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .startWith('')
      .map(val => this.multipleFilter(val));
  }

  searchForTerm(option, term) {
    return option.toLowerCase().indexOf(term) >= 0
  }

  multipleFilter(val: string): string[] {
    let searchTerms = val.toLowerCase().split(" ");
    return this.options.filter(option =>
      searchTerms.every(term => this.searchForTerm(option, term)))
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val) >= 0);
  }
}
