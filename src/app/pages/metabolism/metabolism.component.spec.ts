import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabolismComponent } from './metabolism.component';

describe('MetabolismComponent', () => {
  let component: MetabolismComponent;
  let fixture: ComponentFixture<MetabolismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetabolismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetabolismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
