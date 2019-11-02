import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ArticlesTableDataSource, ArticlesTableItem } from './articles-table-datasource';
import { CrudInterface } from 'src/app/services/interface/crud-interface';
import { Article, ArticleService as ArticlesService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ArticlesTableItem>;
  dataSource: ArticlesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'moreOptions'];

  constructor(
    private articles: ArticlesService
  ){}

  ngOnInit() {
    this.dataSource = new ArticlesTableDataSource(this.articles);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onDelete(id: number){
    this.articles.delete(id).subscribe();

  }

  getMessage(id: number): string{
    const article = "A vida de Jesus";
    return `Deseja realmente excluir o artigo ${article}?`;
  }
}
