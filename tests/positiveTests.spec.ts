import { expect } from "chai";
import { RegistrationForm } from "../registrationForm/registrationForm";
import { expectedValues } from "../fixtures/expectedValues";
import { inputPositiveValues } from "../fixtures/inputPositiveValues";

const { expectedName, expectedSurname, expectedPassword, expectedEmailSymbol, expectedEmailSign, expectedPasswordNumbers  } = expectedValues;
const { inputPositiveName, inputPositiveSurname, inputPositiveEmail, inputPositivePassword, repeatInputPositivePassword } = inputPositiveValues;

describe("Registration form testing - positive tests", () => {
    it("Name testing - first test", () => {
        const inputName: string = RegistrationForm.checkName(inputPositiveName);
        expect(inputName).to.equal(expectedName);
    });
    it("Surname testing - second test", () => {
        const inputSurname: string = RegistrationForm.checkSurname(inputPositiveSurname);
        expect(inputSurname).to.equal(expectedSurname);
    });
    it("Email testing - third test", () => {
        const inputEmail: string = RegistrationForm.checkEmail(inputPositiveEmail);
        expect(inputEmail).to.include(expectedEmailSymbol);
    });
    it("Password testing - fourth test", () => {
        const inputPassword: string = RegistrationForm.checkPassword(inputPositivePassword);
        expect(inputPassword).to.include(expectedPasswordNumbers);
    });
    it("Password testing - fifth test", () => {
        const inputAnotherPassword: string = RegistrationForm.checkPasswordEndsWith(inputPositivePassword);
        expect(inputAnotherPassword).to.include(expectedPasswordNumbers);
    });
    it("Email testing - sixth test", () => {
        const inputEmail: string = RegistrationForm.checkEmailwithSign(inputPositiveEmail);
        expect(inputEmail).to.include(expectedEmailSign);
    });
    it("Repeat password testing - seventh test", () => {
        const inputRepeatPassword: string = RegistrationForm.checkRepeatPassword(repeatInputPositivePassword);
        expect(inputRepeatPassword).to.include(expectedPassword);
    });
});