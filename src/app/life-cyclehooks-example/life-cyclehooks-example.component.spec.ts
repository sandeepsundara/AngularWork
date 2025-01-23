import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclehooksExampleComponent } from './life-cyclehooks-example.component';

describe('LifeCyclehooksExampleComponent', () => {
  let component: LifeCyclehooksExampleComponent;
  let fixture: ComponentFixture<LifeCyclehooksExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCyclehooksExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCyclehooksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
