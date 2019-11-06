import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppRoutes } from 'src/app/utils/routes/routes.enum';
import { AbstractForm } from 'src/app/components/form-view/abstract-form';
import { ProductsService, Product } from 'src/app/services/products/products.service';
import { SnackbarUtilService } from 'src/app/services/snackbar/snackbar-util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent extends AbstractForm<Product, number> implements OnInit {

  private currencyPipe: CurrencyPipe = new CurrencyPipe('pt');

  constructor(
    formBuilder: FormBuilder,
    service: ProductsService,
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
      name: [null, [Validators.required]],
      description: [null,],
      price: [null, [Validators.required, Validators.min(0)]],
      images: [null]
    })
  }

  updateForm(value: Product): void {
    this.form.patchValue({
      id: value.id,
      name: value.name,
      description: value.description,
      price: value.price,
      // images: value.images
    })

    this.formatPrice();
  }

  getSuccessMessage(): string {
    return "Produto cadastrado com sucesso!";
  }

  getListRoute(): string {
    return `/${AppRoutes.LIST_PRODUCTS}`;
  }

  formatPrice(newPrice?: number): void {
    if (!newPrice) {
      newPrice = this.getField('price').value;
    }
    const value = this.currencyPipe.transform(newPrice, 'BRL');
    this.getField('price').patchValue(value);
  }

  convertPriceToNumber(value?: string): void {
    if (!value && this.getField('price').value) {
      value = this.getField('price').value;
    } else if (!value) {
      value = "";
    }

    value = value.replace(/[R\$.]/g, "");
    value = value.replace(/\,/g, ".");
    this.getField('price').patchValue(value);
  }

  onBeforeSave(): void {
    this.convertPriceToNumber();
    this.getField('price').patchValue(new Number(this.getField('price').value));
  }

}
