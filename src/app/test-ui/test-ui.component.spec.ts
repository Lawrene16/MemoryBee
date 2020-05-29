import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestUiComponent } from './test-ui.component';

describe('TestUiComponent', () => {
  let component: TestUiComponent;
  let fixture: ComponentFixture<TestUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
