import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService, User } from 'src/app/services/users/users.service';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutes } from 'src/app/utils/routes/routes.enum';
import { filter } from 'rxjs/operators';
import { AbstractForm } from 'src/app/components/form-view/abstract-form';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent extends AbstractForm<User, number> implements OnInit {

  constructor(
    formBuilder: FormBuilder,
    service: UsersService,
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
      email: [null, [Validators.required, Validators.email], [this.emailValidator.bind(this)]],
      name: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    })
  }

  emailValidator = (input: FormControl): Observable<any> => {
    return new Observable<ValidationErrors>(
      (observer) => {
        // if (input.value == this.administrador.email) {
        //   observer.next(null);
        //   observer.complete();
        // } else {
        // this.administradoresService.emailValidate(input.value)
        //   .subscribe(
        //     (value: Usuario) => {
        //       observer.next({ emailExistente: true })
        //       observer.complete();
        //     },
        //     (error: HttpErrorResponse) => {
        //       if (error.status == 404) {
        //         observer.next(null);
        //       }
        //       observer.complete();
        //     }
        //   )
        // observer.next({ exists: true })
        observer.next(null);
        return observer.complete();
      }
      // }
    );

  }

  updateForm(value: any): void {
    this.form.patchValue({
      id: value.id,
      email: value.email,
      name: value.name
    });

    this.getField('password').disable();
    this.getField('email').disable();
  }

  getSuccessMessage(): string {
    return "Usuário cadastrado com sucesso!";
  }

  getListRoute(): string {
    return `/${AppRoutes.LIST_USERS}`;
  }
  
  onBeforeSave(): void {  }

}
