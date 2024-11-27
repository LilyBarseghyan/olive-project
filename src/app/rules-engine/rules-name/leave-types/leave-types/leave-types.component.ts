import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LeaveType } from './leave-types.model';

@Component({
  selector: 'app-leave-types',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
  ],
  templateUrl: './leave-types.component.html',
  styleUrl: './leave-types.component.css',
})
export class LeaveTypesComponent {
  title = signal('Leave Types');

  displayedColumns: string[] = ['typeName', 'module', 'status', 'action'];

  dataSource = new MatTableDataSource<LeaveType>([
    {
      typeName: 'Annual',
      module: 'Limited',
      status: 'Draft',
    },
    {
      typeName: 'Sick',
      module: 'Unlimited',
      status: 'Active',
    },
    {
      typeName: 'Maternity',
      module: 'Unlimited',
      status: 'Draft',
    },
    {
      typeName: 'Pilgrimage',
      module: 'Attendance',
      status: 'Inactive',
    },
    {
      typeName: 'Not Paid',
      module: 'Unlimited',
      status: 'Inactive',
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

  onClickLeave() {
    console.log('a');
  }
}
