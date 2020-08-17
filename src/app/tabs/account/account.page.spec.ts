import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreComponentModule } from '../../container/explore/explore.module';

import { AccountPage } from './account.page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPage],
      imports: [IonicModule.forRoot(), ExploreComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
