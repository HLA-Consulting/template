import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreerEnfantComponent } from './creer-enfant.component';


describe('CreerEnfantComponent', () => {
  let component: CreerEnfantComponent;
  let fixture: ComponentFixture<CreerEnfantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerEnfantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
