import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreComponentModule } from '../../container/explore/explore.module';

import { SecurityPage } from './security.page';

describe('SecurityPage', () => {
  let component: SecurityPage;
  let fixture: ComponentFixture<SecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityPage],
      imports: [IonicModule.forRoot(), ExploreComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
