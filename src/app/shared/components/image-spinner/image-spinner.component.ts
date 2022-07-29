import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-spinner',
  templateUrl: './image-spinner.component.html',
  styleUrls: ['./image-spinner.component.scss']
})
export class ImageSpinnerComponent implements OnInit {
  @Input('imageUrl') imageUrl: string = '';
  @Input('imageName') imageName: string = '';
  loadingImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLoad() {
    this.loadingImage = false;
  }

}
