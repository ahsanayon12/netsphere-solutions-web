import { Component } from '@angular/core';
import { HeaderBanner } from '../../shared/header-banner/header-banner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderBanner],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
