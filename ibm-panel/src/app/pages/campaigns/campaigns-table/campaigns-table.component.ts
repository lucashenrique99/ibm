import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CampaignsTableDataSource, CampaignsTableItem } from './campaigns-table-datasource';
import { CampaignsService } from 'src/app/services/campaigns/campaigns.service';

@Component({
  selector: 'app-campaigns-table',
  templateUrl: './campaigns-table.component.html',
  styleUrls: ['./campaigns-table.component.scss']
})
export class CampaignsTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<CampaignsTableItem>;
  dataSource: CampaignsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'moreOptions'];

  constructor(
    private campaigns: CampaignsService
  ){}

  ngOnInit() {
    this.dataSource = new CampaignsTableDataSource(this.campaigns);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onDelete(id: number){
    this.campaigns.delete(id).subscribe( () => this.dataSource.findAll());

  }

  getMessage(id: number): string{
    return `Deseja realmente excluir a campanha ${this.dataSource.data.find(p => p.id == id).title}?`;
  }
}
