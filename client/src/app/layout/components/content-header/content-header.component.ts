import { Component, OnInit, Input } from '@angular/core';

// ContentHeader component interface
export interface ContentHeader {
  headerTitle: string;
  actionButton: boolean;
  breadcrumb?: {
    type?: string;
    links?: Array<{
      name?: string;
      isLink?: boolean;
      link?: string;
    }>;
  };
}

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  // input variable
  @Input() contentHeader: ContentHeader;

  constructor() {}

  ngOnInit() {}
}
