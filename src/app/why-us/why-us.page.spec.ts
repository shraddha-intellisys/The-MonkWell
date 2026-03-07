import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyUsPage } from './why-us.page';

describe('WhyUsPage', () => {
  let component: WhyUsPage;
  let fixture: ComponentFixture<WhyUsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
