import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/data.service';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule],
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent {
  logs: any[] = [];
  page = 1;
  pageSize = 10;

  constructor(private dataService: DataService) {
    this.logs = this.dataService.getAuditLogs();
  }

  get paginatedLogs() {
    return this.logs.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  getActionClass(action: string): string {
    switch(action.toLowerCase()) {
      case 'connexion': return 'success';
      case 'déconnexion': return 'secondary';
      case 'modification': return 'warning';
      case 'suppression': return 'danger';
      default: return 'info';
    }
  }
}