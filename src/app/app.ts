import { Component } from '@angular/core';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Solutions } from './pages/solutions/solutions';
import { HeaderBanner } from './shared/header-banner/header-banner';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Footer, Solutions, HeaderBanner],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  animations: [
    trigger('dropdown', [
      state('void', style({ height: '0', opacity: 0, overflow: 'hidden' })),
      state('*', style({ height: '*', opacity: 1, overflow: 'visible' })),
      transition('void <=> *', [
        animate('300ms cubic-bezier(.4,0,.2,1)')
      ])
    ])
  ]
})
export class App {
  activeSection: 'about' | 'solutions' | 'contact' | null = null;

  showSection(section: 'about' | 'solutions' | 'contact' | null) {
    this.activeSection = section;
  }
}
