import { Component, Output, EventEmitter } from '@angular/core';

import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  @Output() sectionSelect = new EventEmitter<'about' | 'solutions' | 'contact' | null>();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
