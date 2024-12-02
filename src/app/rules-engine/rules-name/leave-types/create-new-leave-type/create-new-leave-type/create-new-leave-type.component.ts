import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BasicInfo } from './basic-info.model';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-new-leave-type',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './create-new-leave-type.component.html',
  styleUrl: './create-new-leave-type.component.css',
})
export class CreateNewLeaveTypeComponent {
  titleLeaveTypes = signal('Leave Types-Jordan');
  titleCreateNew = signal('Create New');

  basicInfo: BasicInfo = {
    type: '',
    entitled: '',
    docsRequired: '',
    gracePeriod: '',
    dispute: '',
    validity: '',
    unitOption: '',
    gender: '',
    employmentType: '',
    consumption: '',
    balance: [
      { name: 'Conditional', selected: false },
      { name: 'Extend Balance', selected: false },
      { name: 'Balance Can Be Overridden', selected: false },
    ],
  };

  options = {
    unit: ['Working Days', 'Calendar Days', 'Hours', 'Days & Hours'],
    gender: ['Female', 'Male', 'All'],
    employmentType: ['Full Time', 'Part Time'],
    balance: [
      { name: 'Conditional', selected: false },
      { name: 'Extend Balance', selected: false },
      { name: 'Balance Can Be Overridden', selected: false },
    ],
  };

  refreshValuesOnEntitledChange() {
    if (this.basicInfo.entitled === 'Event based') {
      this.basicInfo.balance.forEach(option => option.selected = false);
      this.basicInfo.consumption = '';
    } else if (this.basicInfo.entitled === 'Through balance') {
      this.basicInfo.balance.forEach(option => option.selected = false);
      this.basicInfo.consumption = '';
    }
  }

  logSelectedType() {
    console.log('Selected Type:', this.basicInfo);
    console.log('Options:', this.options);
  }
}
