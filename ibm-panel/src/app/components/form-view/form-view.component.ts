import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  @Input() title: string;
  @Input() form: FormGroup;
  @Input() disableButton: boolean;
  @Output('onSave') onSaveEventEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleOnSave(){
    this.onSaveEventEmitter.emit(true);
  }

}
