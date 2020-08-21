import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { MenuController } from '@ionic/angular';

import { LoginPage } from './login';

import { IonicStorageModule } from '@ionic/storage';
describe('LoginPage', () => {
  let fixture, app;
  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicStorageModule.forRoot()],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the Home page', () => {
    expect(app).toBeTruthy();
  });

  it('should check the Home status', async () => {
    const didTuts = await app.storage.get('ion_did_home');
    expect(didTuts).toBeFalsy();
  });
});
