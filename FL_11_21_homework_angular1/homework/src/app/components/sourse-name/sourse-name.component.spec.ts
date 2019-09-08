import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourseNameComponent } from './sourse-name.component';

describe('SourseNameComponent', () => {
  let component: SourseNameComponent;
  let fixture: ComponentFixture<SourseNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourseNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourseNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
