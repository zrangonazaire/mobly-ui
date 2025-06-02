import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { NgbAccordionModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-maintenance-list',
  standalone: true,
  imports: [SidebarComponent,CommonModule, NgbAccordionModule, NgbAlertModule, RouterModule,NavbarComponent],
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent {
  maintenances: any[];
  engins: any[] | undefined;

  constructor(private dataService: DataService) {
    this.maintenances = this.dataService.getMaintenances();
    this.dataService.getEngins().subscribe(data => {
      this.engins = data;
    });
  }

  getEngin(id: number) {
    return this.engins?.find(e => e.id === id);
  }

  getSeverity(type: string) {
    return type === 'Curative' ? 'danger' : 'warning';
  }
}