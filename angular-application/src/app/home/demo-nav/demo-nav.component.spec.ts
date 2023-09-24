import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNavComponent } from './demo-nav.component';

describe('DemoNavComponent', () => {
  let component: DemoNavComponent;
  let fixture: ComponentFixture<DemoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoNavComponent]
    });
    fixture = TestBed.createComponent(DemoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
