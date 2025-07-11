import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderBanner } from '../../shared/header-banner/header-banner';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HeaderBanner],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  name: string = '';
  email: string = '';
  message: string = '';
  
  // Social media links - updated with correct URLs
  facebookUrl: string = 'https://www.facebook.com/profile.php?id=61576978132707';
  linkedinUrl: string = 'https://www.linkedin.com/company/netsphere-solutions-limited/';

  onSubmit(form: any) {
    if (form.valid) {
      // Show success message
      alert('Thank you for contacting us, ' + this.name + '! We will get back to you soon.');
      
      // Reset form fields
      this.name = '';
      this.email = '';
      this.message = '';
      form.resetForm();
    }
  }

  // Social media navigation methods
  openFacebook() {
    window.open(this.facebookUrl, '_blank');
  }

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }
}
