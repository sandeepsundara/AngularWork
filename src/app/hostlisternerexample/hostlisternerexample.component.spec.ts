import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlisternerexampleComponent } from './hostlisternerexample.component';

describe('HostlisternerexampleComponent', () => {
  let component: HostlisternerexampleComponent;
  let fixture: ComponentFixture<HostlisternerexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostlisternerexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HostlisternerexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
