import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableButtonBarComponent } from './table-button-bar.component';

describe('TableButtonBarComponent', () => {
  let component: TableButtonBarComponent;
  let fixture: ComponentFixture<TableButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableButtonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
