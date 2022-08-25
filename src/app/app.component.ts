import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form" style="display: flex; flex-direction: column;">
      <label for="firstName">Enter your name</label>
      <input type="text" formControlName="firstName" />
      <label for="lastName">Enter your last name</label>
      <input type="text" formControlName="lastName" />
      <label for="email">Enter your name</label>
      <input type="text" formControlName="email" />
      <label for="age">Enter your age</label>
      <input type="number" formControlName="age" />
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: [
    'input { margin-bottom: 10px; max-width: 200px; min-height: 20px; }',
  ],
})
export class AppComponent {
  title = 'Angular-Reactive-Form';

  person = {
    firstname: 'Coder',
    age: 2,
    lastname: 'Byte',
    email: 'ali@example.com',
  };
  form = new FormGroup({
    firstName: new FormControl(this.person.firstname),
    age: new FormControl(this.person.age),
    lastName: new FormControl(this.person.lastname),
    email: new FormControl(this.person.email),
  });
}
