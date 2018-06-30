import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandLoaderComponent } from './on-demand-loader.component';

describe('OnDemandLoaderComponent', () => {
  let component: OnDemandLoaderComponent;
  let fixture: ComponentFixture<OnDemandLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDemandLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
