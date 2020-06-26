import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCollectionComponent } from './app-collection.component';

describe('AppCollectionComponent', () => {
  let component: AppCollectionComponent;
  let fixture: ComponentFixture<AppCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
