import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LessonsTableDataSource, LessonsTableItem } from './lessons-table-datasource';
import { LessonsService } from 'src/app/services/lessons/lessons.service';

@Component({
  selector: 'app-lessons-table',
  templateUrl: './lessons-table.component.html',
  styleUrls: ['./lessons-table.component.scss']
})
export class LessonsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<LessonsTableItem>;
  dataSource: LessonsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'date'];

  constructor(
    private lessons: LessonsService
  ){}

  ngOnInit() {
    this.dataSource = new LessonsTableDataSource(this.lessons);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  
  onDelete(id: number){
    this.lessons.delete(id).subscribe();
  }

  getMessage(id: number): string{
    const lesson = "A vida de Jesus";
    return `Deseja realmente excluir a lição ${lesson}?`;
  }
}
