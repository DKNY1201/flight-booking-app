import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryDetailComponent } from './booking-history-detail.component';

describe('BookingHistoryDetailComponent', () => {
    let component: BookingHistoryDetailComponent;
    let fixture: ComponentFixture<BookingHistoryDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BookingHistoryDetailComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookingHistoryDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
