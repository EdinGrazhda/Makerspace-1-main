import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesServicesComponent } from './movies-services.component';

describe('MoviesServicesComponent', () => {
  let component: MoviesServicesComponent;
  let fixture: ComponentFixture<MoviesServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesServicesComponent]
    });
    fixture = TestBed.createComponent(MoviesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
