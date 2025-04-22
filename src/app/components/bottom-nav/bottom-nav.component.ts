import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss'],
  standalone: true,
  imports: [IonicModule],  // Add IonicModule here
})
export class BottomNavComponent {}
