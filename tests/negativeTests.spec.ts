import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { expectedValues } from "../fixtures/expectedValues";
import { inputNegativeValues } from "../fixtures/inputNegativeValues";

const { expectedName, expectedSurname, expectedPassword, expectedEmailSymbol, expectedEmailSign, expectedPasswordNumbers } = expectedValues;
const { inputNegativeName, inputNegativeSurname, inputNegativeEmail, inputNegativePassword, repeatInputNegativePassword } = inputNegativeValues;

describe("Registration form testing - negative tests", () => {
    it("Name testing - first test", () => {
        const inputName: string = RegistrationForm.checkName(inputNegativeName);
        expect(inputName).to.not.equal(expectedName);
    });
    it("Surname testing - second test", () => {
        const inputSurname: string = RegistrationForm.checkSurname(inputNegativeSurname);
        expect(inputSurname).to.not.equal(expectedSurname);
    });
    it("Email testing - third test", () => {
        const inputEmail: string = RegistrationForm.checkEmail(inputNegativeEmail);
        expect(inputEmail).to.not.include(expectedEmailSymbol);
    });
    it("Password testing - fourth test", () => {
        const inputPassword: string = RegistrationForm.checkPassword(inputNegativePassword);
        expect(inputPassword).to.not.include(expectedPasswordNumbers);
    });
    it("Password testing - fifth test", () => {
        const inputAnotherPassword: string = RegistrationForm.checkPasswordEndsWith(inputNegativePassword);
        expect(inputAnotherPassword).to.not.include(expectedPasswordNumbers);
    });
    it("Email testing - sixth test", () => {
        const inputEmail: string = RegistrationForm.checkEmailwithSign(inputNegativeEmail);
        expect(inputEmail).to.not.include(expectedEmailSign);
    });
    it("Repeat password testing - seventh test", () => {
        const inputRepeatPassword: string = RegistrationForm.checkRepeatPassword(repeatInputNegativePassword);
        expect(inputRepeatPassword).to.not.include(expectedPassword);
    });
});