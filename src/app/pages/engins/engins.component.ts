// src/app/pages/engins/engins.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Engin } from '../../models/engin.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule,NavbarComponent,SidebarComponent],
  templateUrl: './engins.component.html',
  styleUrls: ['./engins.component.scss'],
  selector: 'app-engins',
})
export class EnginsComponent {
  engins: Engin[] = [];

  constructor(private dataService: DataService) {
    this.loadEngins();
  }

  loadEngins() {
    this.dataService.getEngins().subscribe({
      next: (data) => this.engins = data,
      error: (err) => console.error(err)
    });
  }

  delete(id: number) {
    // if (confirm('Supprimer cet engin ?')) {
    //   this.dataService.deleteEngin(id).subscribe({
    //     next: () => this.loadEngins(),
    //     error: (err) => console.error(err)
    //   });
    // }
  }
}