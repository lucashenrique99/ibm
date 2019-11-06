import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UsersTableDataSource, UsersTableItem } from './users-table-datasource';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<UsersTableItem>;
  dataSource: UsersTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'name', 'moreOptions'];

  constructor(
    private users: UsersService
  ) { }

  ngOnInit() {
    this.dataSource = new UsersTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onDelete(id) {
    this.users.delete(id).subscribe(() => this.dataSource.findAll());
  }

  getMessage(id: number): string {
    return `Deseja realmente excluir o usuário ${this.dataSource.data.find(u => u.id == id).name}?`;
  }
}
