import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AbstractForm } from 'src/app/components/form-view/abstract-form';
import { Lesson, LessonsService } from 'src/app/services/lessons/lessons.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/utils/routes/routes.enum';
import { UploadService } from 'src/app/services/uploads/upload.service';

@Component({
  selector: 'app-lessons-form',
  templateUrl: './lessons-form.component.html',
  styleUrls: ['./lessons-form.component.scss']
})
export class LessonsFormComponent extends AbstractForm<Lesson, number> implements OnInit {

  content: any = [];

  constructor(
    formBuilder: FormBuilder,
    service: LessonsService,
    messages: SnackbarUtilService,
    router: Router,
    activatedRoute: ActivatedRoute,
    private render: Renderer2,
    private uploads: UploadService
  ) {
    super(
      formBuilder,
      service,
      messages,
      router,
      activatedRoute
    );
  }

  formConfigurer(): void {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required]],
      // subtitle: [null, [Validators.required]],
      date: [null, [Validators.required]],
      // content: [null,],
      url: [null,]
    })
  }

  updateForm(value: Lesson): void {
    this.content = value.content;
    this.form.patchValue({
      id: value.id,
      title: value.title,
      // subtitle: value.subtitle,
      date: value.date,
      // content: value.content
      url: value.url
    })

  }

  getSuccessMessage(): string {
    return "Lição cadastrada com sucesso!";
  }

  getListRoute(): string {
    return `/${AppRoutes.LIST_LESSONS}`;
  }

  onBeforeSave(): void {
  }

  onQuillContentChange(content) {
    this.getField('content').patchValue(content);
  }

  onUploadClick(element: HTMLElement) {
    element.click();
  }

  handleOnChangeUploadFile(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length) {
      this.uploads.upload(files).subscribe((object) => {
        this.getField('url').patchValue(object.url);
      })
    }
  }
}
