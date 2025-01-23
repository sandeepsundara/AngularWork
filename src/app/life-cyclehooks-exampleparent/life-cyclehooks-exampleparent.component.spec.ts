import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclehooksExampleparentComponent } from './life-cyclehooks-exampleparent.component';

describe('LifeCyclehooksExampleparentComponent', () => {
  let component: LifeCyclehooksExampleparentComponent;
  let fixture: ComponentFixture<LifeCyclehooksExampleparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifeCyclehooksExampleparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCyclehooksExampleparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
