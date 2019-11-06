import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'src/app/components/form-view/abstract-form';
import { Campaign, CampaignsService } from 'src/app/services/campaigns/campaigns.service';
import { FormBuilder, Validators } from '@angular/forms';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/utils/routes/routes.enum';

@Component({
  selector: 'app-campaigns-form',
  templateUrl: './campaigns-form.component.html',
  styleUrls: ['./campaigns-form.component.scss']
})
export class CampaignsFormComponent extends AbstractForm<Campaign, number> implements OnInit {

  content: any = [];

  constructor(
    formBuilder: FormBuilder,
    service: CampaignsService,
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
      content: [null,],
      initialDate: [null, [Validators.required]],
      finalDate: [null, [Validators.required]],
    })
  }

  updateForm(value: Campaign): void {
    this.content = JSON.parse(value.content);
    value.content = this.content;

    this.form.patchValue({
      id: value.id,
      title: value.title,
      subtitle: value.subtitle,
      content: value.content,
      initialDate: value.initialDate,
      finalDate: value.finalDate,
    })

  }

  getSuccessMessage(): string {
    return "Campanha cadastrada com sucesso!";
  }

  getListRoute(): string {
    return `/${AppRoutes.LIST_CAMPAIGNS}`;
  }

  onBeforeSave(): void {
    this.getField('content')
      .patchValue(JSON.stringify(this.getField('content').value));
  }

  onQuillContentChange(content) {
    this.getField('content').patchValue(content);
  }


}
