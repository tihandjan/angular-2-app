import { Component } from 'angular2/core';

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
    log(x){
        console.log(x);
    }
}