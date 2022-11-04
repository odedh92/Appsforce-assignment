import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePopUpComponent } from './confirm-delete-pop-up.component';

describe('ConfirmDeletePopUpComponent', () => {
  let component: ConfirmDeletePopUpComponent;
  let fixture: ComponentFixture<ConfirmDeletePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeletePopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
