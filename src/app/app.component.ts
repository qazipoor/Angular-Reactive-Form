import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form" style="display: flex; flex-direction: column;">
      <label for="firstName">Enter your name</label>
      <input type="text" formControlName="firstname" />
      <label for="lastName">Enter your last name</label>
      <input type="text" formControlName="lastname" />
      <label for="email">Enter your name</label>
      <input type="text" formControlName="twitter" />
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

  form!: FormGroup;
  person: any = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte',
  };
  personProps: string[] = [];

  ngOnInit() {
    const formDataObj: any = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}
