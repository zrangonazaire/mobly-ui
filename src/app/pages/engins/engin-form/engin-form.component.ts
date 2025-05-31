import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { Engin } from '../../../models/engin.model';

@Component({
  selector: 'app-engin-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './engin-form.component.html',
  styleUrls: ['./engin-form.component.scss']
})
export class EnginFormComponent implements OnInit {
  engin: Partial<Engin> = {
    type: '',
    modele: '',
    statut: 'disponible'
  };
  isEditMode = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    // if (id) {
    //   this.isEditMode = true;
    //   this.dataService.getEngin().subscribe(engin => {
    //     if (engin != null) {
    //       this.engin = { ...engin };
    //     }
    //   });
    // }
  }

  submit() {
    // const operation = this.isEditMode
    //   ? this.dataService.updateEngin(this.engin as Engin)
    //   : this.dataService.createEngin(this.engin as Omit<Engin, 'id'>);

    // operation.subscribe(() => {
    //   this.router.navigate(['../'], { relativeTo: this.route });
    // });
  }
}