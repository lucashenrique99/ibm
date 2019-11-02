import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticleService, Article } from 'src/app/services/articles/article.service';
import { FormBuilder, Validators } from '@angular/forms';
import { AbstractForm } from 'src/app/components/form-view/abstract-form';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/utils/routes/routes.enum';

@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.scss']
})
export class ArticlesFormComponent extends AbstractForm<Article, number> implements OnInit {

  content: any = [];

  constructor(
    formBuilder: FormBuilder,
    service: ArticleService,
    messages: SnackbarUtilService,
    router: Router,
    activatedRoute: ActivatedRoute
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
      subtitle: [null, [Validators.required]],
      content: [null,]
    })
  }

  updateForm(value: Article): void {
    this.content = value.content;
    this.form.patchValue({
      id: value.id,
      title: value.title,
      subtitle: value.subtitle,
      content: value.content
    })

  }

  getSuccessMessage(): string {
    return "Artigo cadastrado com sucesso!";
  }

  getListRoute(): string {
    return `/${AppRoutes.LIST_ARTICLES}`;
  }

  onBeforeSave(): void {
  }

  onQuillContentChange(content) {
    this.getField('content').patchValue(content);
  }

}
