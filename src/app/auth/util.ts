import { AbstractControl } from "@angular/forms"

export function passCheck(password: AbstractControl) {
    return (repass: AbstractControl) => {
        if (password.value !== repass.value) {
            return {
                doesNotMatch: true
            }
        }
        return null;
    }
}