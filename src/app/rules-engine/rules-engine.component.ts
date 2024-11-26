import {
  Component,
  AfterViewInit,
  ViewChild,
  signal,
  input,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { type RulesEngine } from './rules-engine.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rules-engine',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './rules-engine.component.html',
  styleUrls: ['./rules-engine.component.css'],
})
export class RulesEngineComponent implements AfterViewInit {
  title = signal('Rules Engine');

  displayedColumns: string[] = [
    'ruleName',
    'module',
    'country',
    'status',
    'action',
  ];

  dataSource = new MatTableDataSource<RulesEngine>([
    {
      ruleName: 'Leave Types',
      module: 'Leaves',
      country: 'Palestine',
      countryCode: 'ps',
      status: 'Ready',
    },
    {
      ruleName: 'Time tracking',
      module: 'Attendance',
      country: 'Armenia',
      countryCode: 'am',
      status: 'Active',
    },
    {
      ruleName: 'Leave Types',
      module: 'Leaves',
      country: 'Palestine',
      countryCode: 'ps',
      status: 'Draft',
    },
    {
      ruleName: 'Country General',
      module: 'Attendance',
      country: 'America',
      countryCode: 'us',
      status: 'Inactive',
    },
    {
      ruleName: 'Time tracking',
      module: 'Attendance',
      country: 'Palestine',
      countryCode: 'ps',
      status: 'Inactive',
    },
    {
      ruleName: 'Leave Types',
      module: 'Leaves',
      country: 'Armenia',
      countryCode: 'am',
      status: 'Active',
    },
    {
      ruleName: 'Leave Types',
      module: 'Leaves',
      country: 'Armenia',
      countryCode: 'am',
      status: 'Active',
    },
    {
      ruleName: 'Leave Types',
      module: 'Attendance',
      country: 'Armenia',
      countryCode: 'am',
      status: 'Inactive',
    },
    {
      ruleName: 'Leave Types',
      module: 'Leaves',
      country: 'America',
      countryCode: 'us',
      status: 'Ready',
    },
  ]);

  searchText = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filterData() {
    if (this.searchText.trim() === '') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = this.searchText.trim().toLowerCase();
    }
  }

  onActionClick(element: any): void {
    console.log('Action clicked for:', element);
  }
}
