import { AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { CrudInterface } from 'src/app/services/interface/crud-interface';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs/operators';
import { OnInit } from '@angular/core';

export abstract class AbstractForm<T, ID> implements OnInit {

    form: FormGroup;

    constructor(
        protected formBuilder: FormBuilder,
        protected service: CrudInterface<T, ID>,
        protected messages: SnackbarUtilService,
        protected router: Router,
        protected activatedRoute: ActivatedRoute
    ) {
    }

    abstract formConfigurer(): void;

    abstract onBeforeSave(): void;

    abstract updateForm(value: T): void;

    abstract getSuccessMessage(): string;

    abstract getListRoute(): string;

    ngOnInit() {
        this.formConfigurer();

        this.activatedRoute
            .paramMap
            .pipe(filter((param: ParamMap) => param && param.has("id")))
            .subscribe(
                (param: ParamMap) => {
                    this.service
                        .findById(param.get("id"))
                        .pipe(filter(value => value !== null && value !== undefined))
                        .subscribe((value) => this.updateForm(value))
                }
            )

    }

    onSave() {
        this.onBeforeSave();
        this.service.save(this.form.getRawValue())
            .subscribe(
                () => {
                    this.messages.showMessage(this.getSuccessMessage());
                    this.router.navigate([this.getListRoute()])
                }
            );
    }

    getField(id: string): AbstractControl {
        return (this.form) ? this.form.get(id) : null;
    }

    hasError(formId: string, error: string): boolean {
        return (this.form) ? this.form.get(formId).hasError(error) : false;
    }

    isInvalidForm(): boolean {
        return (this.form) ? this.form.status !== 'VALID' : false;
    }

}
