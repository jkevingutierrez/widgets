import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { LangModule } from '../lang/lang.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StatisticsComponent } from './statistics.component';

import { DataService } from '../services/data.service';

describe('StatisticsComponent', () => {
  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LangModule,
        MatTabsModule,
        MatIconModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [
        StatisticsComponent
      ],
      providers: [
        DataService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
