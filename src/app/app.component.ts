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
      <label for="age">Enter your age</label>
      <input type="number" formControlName="age" />
      <label for="twitter">Enter your name</label>
      <input type="text" formControlName="twitter" />
    </form>
    <pre>{{ form.value | json }}</pre>
  `,
  styles: [
    'input { margin-bottom: 10px; max-width: 200px; min-height: 20px; }'
  ]
})
export class AppComponent {
  title = 'Angular-Reactive-Form';

  list = {};
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte',
  };
  form = new FormGroup({
    firstName: new FormControl(this.person.firstname),
    age: new FormControl(this.person.age),
    lastName: new FormControl(this.person.lastname),
    twitter: new FormControl(this.person.twitter),
  });
}
