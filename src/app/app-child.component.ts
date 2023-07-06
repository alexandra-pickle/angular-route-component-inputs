import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child input: {{ input }}</p>`,
  styleUrls: [],
  standalone: true,
})
export default class ChildComponent implements OnInit {
  @Input()
  input?: string;

  ngOnInit() {
    console.log(this.input);
  }
}
