import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass'],
})
export class SpinnerComponent implements OnInit {
  constructor() {}

  @Input() show : boolean = false;

  ngOnInit(): void {}
}
