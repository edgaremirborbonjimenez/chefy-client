import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderInfoPage } from './order-info.page';

describe('OrderInfoPage', () => {
  let component: OrderInfoPage;
  let fixture: ComponentFixture<OrderInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OrderInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
