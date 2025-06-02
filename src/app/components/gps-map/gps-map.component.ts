import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-gps-map',
  imports: [NavbarComponent,SidebarComponent],
  templateUrl: './gps-map.component.html',
  styleUrl: './gps-map.component.scss'
})
export class GpsMapComponent {

}
