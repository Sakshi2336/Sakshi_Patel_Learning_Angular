import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerListComponent } from './cricketer-list.component';

describe('CricketerListComponent', () => {
  let component: CricketerListComponent;
  let fixture: ComponentFixture<CricketerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
