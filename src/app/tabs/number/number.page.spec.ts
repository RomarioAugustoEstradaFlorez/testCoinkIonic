import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreComponentModule } from '../../container/explore/explore.module';

import { NumberPage } from './number.page';

describe('NumberPage', () => {
  let component: NumberPage;
  let fixture: ComponentFixture<NumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NumberPage],
      imports: [IonicModule.forRoot(), ExploreComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
