import { Component } from '@angular/core';
import { HeaderBanner } from '../../shared/header-banner/header-banner';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderBanner],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {

}
