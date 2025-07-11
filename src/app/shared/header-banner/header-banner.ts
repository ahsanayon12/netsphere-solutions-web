import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-banner.html',
  styleUrls: ['./header-banner.scss']
})
export class HeaderBanner {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
