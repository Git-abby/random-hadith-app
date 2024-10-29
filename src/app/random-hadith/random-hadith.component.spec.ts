import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomHadithComponent } from './random-hadith.component';

describe('RandomHadithComponent', () => {
  let component: RandomHadithComponent;
  let fixture: ComponentFixture<RandomHadithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomHadithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
