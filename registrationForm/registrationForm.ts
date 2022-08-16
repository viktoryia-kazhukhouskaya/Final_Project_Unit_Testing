import { expectedValues } from "../fixtures/expectedValues";

const { expectedName, expectedSurname, expectedPassword, expectedEmailSymbol, expectedEmailSign, expectedPasswordNumbers  } = expectedValues;

export class RegistrationForm {
    static checkName(inputName: string): string {
        if (inputName === expectedName) {
            return inputName;
        } else {
            return "Invalid";
        }
    }

    static checkSurname(inputSurname: string): string {
        if (inputSurname === expectedSurname) {
            return inputSurname;
        } else {
            return "Invalid";
        }
    }

    static checkEmail(inputEmail: string): string {
        if (inputEmail.includes(expectedEmailSymbol)) {
            return inputEmail;
        } else {
            return "Invalid";
        }
    }

    static checkPassword(inputPassword: string): string {
        if (inputPassword.includes(expectedPasswordNumbers)) {
            return inputPassword;
        } else {
            return "Invalid";
        }
    }

    static checkPasswordEndsWith(inputAnotherPassword: string): string {
        if (inputAnotherPassword.endsWith(expectedPasswordNumbers)) {
            return inputAnotherPassword;
        } else {
            return "Invalid";
        }
    }

    static checkEmailwithSign(inputEmail: string): string {
        if (inputEmail.includes(expectedEmailSign)) {
            return inputEmail;
        } else {
            return "Invalid";
        }
    }

    static checkRepeatPassword(inputRepeatPassword: string): string {
        if (inputRepeatPassword === expectedPassword) {
            return expectedPassword;
        } else {
            return "Invalid";
        }
    }
}
