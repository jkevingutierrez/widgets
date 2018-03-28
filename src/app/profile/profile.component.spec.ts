import { HttpClientModule } from '@angular/common/http';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangModule } from '../lang/lang.module';
import { ProfileComponent } from './profile.component';

import { UserService } from '../services/user.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LangModule,
        HttpClientModule
      ],
      declarations: [
        ProfileComponent
      ],
      providers: [
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
