import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSwitcherComponent } from './lib-switcher.component';

describe('LibSwitcherComponent', () => {
  let component: LibSwitcherComponent;
  let fixture: ComponentFixture<LibSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
