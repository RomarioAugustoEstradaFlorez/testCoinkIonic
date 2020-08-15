import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfopigComponent } from './infopig.component';

describe('InfopigComponent', () => {
  let component: InfopigComponent;
  let fixture: ComponentFixture<InfopigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfopigComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfopigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
