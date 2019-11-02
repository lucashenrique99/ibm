import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-table-button-bar',
  templateUrl: './table-button-bar.component.html',
  styleUrls: ['./table-button-bar.component.scss']
})
export class TableButtonBarComponent implements OnInit {

  @Input() itemId: string;
  @Input() message: string;
  @Output('OnDeleteConfirm') onConfirmEventEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  handleOnEditClick() {
    const currentURL = this.router.url;
    this.router.navigate([`${currentURL}/${this.itemId}`]);
  }

  handleOnDeleteClick() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { title: "Tem certeza?", message: this.message }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirm) {
        this.onConfirmEventEmitter.emit(true);
      }
    });
  }
}
