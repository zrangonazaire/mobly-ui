import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, NgbDropdownModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
// toggleSubmenu(event: Event) {
//     event.preventDefault();
//     event.stopPropagation();
    
//     const parentItem = (event.currentTarget as HTMLElement).closest('.menu-item');
//     if (!parentItem) return;

//     // Fermer tous les autres sous-menus
//     const allSubmenus = document.querySelectorAll('.menu-item.has-submenu');
//     allSubmenus.forEach(item => {
//       if (item !== parentItem) {
//         item.classList.remove('expanded');
//       }
//     });

//     // Basculer l'état du sous-menu cliqué
//     parentItem.classList.toggle('expanded');
//   }
}
