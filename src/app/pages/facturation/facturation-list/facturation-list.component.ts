import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturationService } from '../../../services/facturation.service';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-facturation-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbPaginationModule],
  templateUrl: './facturation-list.component.html',
  styleUrls: ['./facturation-list.component.scss']
})
export class FacturationListComponent {
  factures: any[] = [];
  page = 1;
  pageSize = 5;

  constructor(private facturationService: FacturationService) {
    this.factures = this.facturationService.getFactures();
  }

  getStatusClass(statut: string): string {
    switch(statut) {
      case 'payée': return 'success';
      case 'envoyée': return 'info';
      case 'annulée': return 'danger';
      default: return 'warning';
    }
  }

  get paginatedFactures() {
    return this.factures.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }
}