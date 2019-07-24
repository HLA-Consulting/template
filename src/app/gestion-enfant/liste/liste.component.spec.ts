import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listeComponent } from './liste.component';

describe('TablesComponent', () => {
  let component: listeComponent;
  let fixture: ComponentFixture<listeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
