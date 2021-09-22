import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCadastrarComponent } from './user-cadastrar.component';

describe('UserCadastrarComponent', () => {
  let component: UserCadastrarComponent;
  let fixture: ComponentFixture<UserCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
