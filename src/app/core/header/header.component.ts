import { Component, OnInit } from '@angular/core';
import { ComponentMessageService } from '../services/component-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchInput: string = '';

  constructor(
    private messageService: ComponentMessageService
  ) { }

  ngOnInit(): void {
  }

  submitSearch() {
    this.messageService.filterArguments({message: 'searchUpdated', search: this.searchInput});
  }

}
