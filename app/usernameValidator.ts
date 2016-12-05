import { Control } from 'angular2/common';

export class UsernameValidator {

    static shouldBeUnique(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if (control.value == 'igor')
                    return resolve({shouldBeUnique: true});
                else
                    return resolve(null);
            }, 1000)
        })
    }

    static CannonContainSpace(control: Control){
        if (control.value.indexOf(' ') >= 0)
            return {cannotContainSpace: true};

        return null;
    }
}