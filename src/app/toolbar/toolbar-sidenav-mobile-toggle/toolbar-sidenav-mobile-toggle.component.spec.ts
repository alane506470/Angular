import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarSidenavMobileToggleComponent } from './toolbar-sidenav-mobile-toggle.component';

describe('ToolbarSidenavMobileToggleComponent', () => {
  let component: ToolbarSidenavMobileToggleComponent;
  let fixture: ComponentFixture<ToolbarSidenavMobileToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarSidenavMobileToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarSidenavMobileToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
