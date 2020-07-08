import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgePanelComponent } from './bridge-panel.component';

describe('BridgePanelComponent', () => {
  let component: BridgePanelComponent;
  let fixture: ComponentFixture<BridgePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
