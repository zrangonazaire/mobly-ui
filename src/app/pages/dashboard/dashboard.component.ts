import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { AvailabilityGaugeComponent } from '../../components/availability-gauge/availability-gauge.component';
import { DocumentAlertsComponent } from '../../components/document-alerts/document-alerts.component';
import { EquipmentListComponent } from '../../components/equipment-list/equipment-list.component';
import { HistoricalChartComponent } from '../../components/historical-chart/historical-chart.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    AvailabilityGaugeComponent,
    EquipmentListComponent,
    HistoricalChartComponent,
    DocumentAlertsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dashboardService = inject(DashboardService);
  adminAvailability$ = this.dashboardService.getAdminAvailability();
  mechanicalAvailability$ = this.dashboardService.getMechanicalAvailability();
  fullAvailability$ = this.dashboardService.getFullAvailabilityEquipment();
  alertEquipment$ = this.dashboardService.getAlertEquipment();
  historicalData$ = this.dashboardService.getHistoricalData();
  documentsToRenew$ = this.dashboardService.getDocumentsToRenew();
documents: any;
}