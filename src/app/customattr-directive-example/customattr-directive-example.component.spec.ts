import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomattrDirectiveExampleComponent } from './customattr-directive-example.component';

describe('CustomattrDirectiveExampleComponent', () => {
  let component: CustomattrDirectiveExampleComponent;
  let fixture: ComponentFixture<CustomattrDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomattrDirectiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomattrDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
