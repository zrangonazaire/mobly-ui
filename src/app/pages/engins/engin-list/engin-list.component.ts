import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Engin } from '../../../models/engin.model';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-engin-list',
  standalone: true,
  imports: [CommonModule, RouterModule,NavbarComponent,SidebarComponent],
  templateUrl: './engin-list.component.html',
  styleUrls: ['./engin-list.component.scss']
})
export class EnginsListComponent {
  engins: Engin[] = [];

  constructor(private dataService: DataService) {
    this.loadEngins();
  }

  loadEngins() {
    this.dataService.getEngins().subscribe(engins => {
      this.engins = engins;
    });
  }

  deleteEngin(id: number) {
    // if (confirm('Voulez-vous vraiment supprimer cet engin ?')) {
    //   this.dataService.deleteEngin(id).subscribe(() => {
    //     this.loadEngins();
    //   });
    // }
  }
}