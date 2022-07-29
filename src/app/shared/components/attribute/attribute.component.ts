import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.scss']
})
export class AttributeComponent implements OnInit {
  @Input('name') name: string = '';
  @Input('icon') icon: string = '';
  @Input('showName') showName: boolean = false;
  @Input('color') color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
