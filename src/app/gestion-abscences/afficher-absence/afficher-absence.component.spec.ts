import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AfficherAbsenceComponent } from './afficher-absencecomponent';


describe('FormsComponent', () => {
  let component: AfficherAbsenceComponent;
  let fixture: ComponentFixture<AfficherAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
