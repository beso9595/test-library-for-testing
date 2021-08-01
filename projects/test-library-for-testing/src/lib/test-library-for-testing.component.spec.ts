import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibraryForTestingComponent } from './test-library-for-testing.component';

describe('TestLibraryForTestingComponent', () => {
  let component: TestLibraryForTestingComponent;
  let fixture: ComponentFixture<TestLibraryForTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibraryForTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibraryForTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
