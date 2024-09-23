import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerListItemComponent } from './cricketer-list-item.component';

describe('CricketerDetailComponent', () => {
  let component: CricketerListItemComponent;
  let fixture: ComponentFixture<CricketerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketerListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
