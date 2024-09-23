import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerDetailComponent } from './cricketer-detail.component';

describe('CricketerDetailComponent', () => {
  let component: CricketerDetailComponent;
  let fixture: ComponentFixture<CricketerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketerDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
