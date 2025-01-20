import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerngexampleComponent } from './containerngexample.component';

describe('ContainerngexampleComponent', () => {
  let component: ContainerngexampleComponent;
  let fixture: ComponentFixture<ContainerngexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerngexampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerngexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
