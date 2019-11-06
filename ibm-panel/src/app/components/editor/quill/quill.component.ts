import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input, OnChanges, AfterViewInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss']
})
export class QuillComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('quill', { static: true })
  quill: ElementRef;


  @Input('content') content: any;
  @Output('onTextChange') onTextChangeEventEmitter: EventEmitter<any> = new EventEmitter();
  private editor: any;

  constructor() { }

  ngOnInit() {

    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['link', 'image'],

      ['clean']                                         // remove formatting button
    ];

    let Quill = require('quill');
    this.editor = new Quill(this.quill.nativeElement, {
      theme: 'snow',
      placeholder: 'Digite o texto aqui...',
      modules: {
        toolbar: toolbarOptions
      }
    });

    this.editor.on('text-change', (delta, oldContents, source) => {
      if (source == 'user') {
        this.onTextChangeEventEmitter.emit(this.editor.getContents());
      }
    })
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.content && this.editor) {
      this.editor.setContents(this.content, 'api');
    }
  }

  ngAfterViewInit(): void {
    if (this.content) {
      this.editor.setContents(this.content, 'api');
    }
  }

}
