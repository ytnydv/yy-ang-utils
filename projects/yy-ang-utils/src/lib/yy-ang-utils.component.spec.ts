import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YyAngUtilsComponent } from './yy-ang-utils.component';

describe('YyAngUtilsComponent', () => {
  let component: YyAngUtilsComponent;
  let fixture: ComponentFixture<YyAngUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YyAngUtilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YyAngUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
