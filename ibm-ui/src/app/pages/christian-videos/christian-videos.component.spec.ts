import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristianVideosComponent } from './christian-videos.component';

describe('ChristianVideosComponent', () => {
  let component: ChristianVideosComponent;
  let fixture: ComponentFixture<ChristianVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristianVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristianVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
