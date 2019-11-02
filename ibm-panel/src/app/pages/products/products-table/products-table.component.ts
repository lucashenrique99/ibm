import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsTableDataSource, ProductsTableItem } from './products-table-datasource';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<ProductsTableItem>;
  dataSource: ProductsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'moreOptions'];
  constructor(
    private products: ProductsService
  ){}

  ngOnInit() {
    this.dataSource = new ProductsTableDataSource(this.products);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  
  onDelete(id){
    this.products.delete(id).subscribe();
  }

  getMessage(id: number): string{
    const product = "Camisa Cristã Preta";
    return `Deseja realmente excluir o produto ${product}?`;
  }

}
