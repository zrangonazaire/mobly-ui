import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturationService {
  getFactures(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
