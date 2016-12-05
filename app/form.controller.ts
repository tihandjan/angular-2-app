import { Component } from 'angular2/core';
import { Control, ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { UsernameValidator } from './usernameValidator';

@Component({
    selector: 'my-form',
    templateUrl: 'app/form.controller.html',
    styles: [`
        form {
            padding: 50px 100px;
        }
        input {
            margin-bottom: 20px;
        }
        .ng-touched.ng-invalid {
            border: 1px solid red;
        }
    `]
})

export class FormController {
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.required, UsernameValidator.shouldBeUnique],
            password: ['', Validators.compose([
                Validators.required,
                UsernameValidator.CannonContainSpace
            ])]
        })
    }
    submit(e){
        console.log(this.form)
    }
}