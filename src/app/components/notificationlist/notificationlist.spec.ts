import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notificationlist } from './notificationlist';

describe('Notificationlist', () => {
  let component: Notificationlist;
  let fixture: ComponentFixture<Notificationlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notificationlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Notificationlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
