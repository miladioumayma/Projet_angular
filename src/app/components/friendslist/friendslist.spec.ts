import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Friendslist } from './friendslist';

describe('Friendslist', () => {
  let component: Friendslist;
  let fixture: ComponentFixture<Friendslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Friendslist],
    }).compileComponents();

    fixture = TestBed.createComponent(Friendslist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
