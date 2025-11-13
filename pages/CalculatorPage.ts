import { expect, Page } from "@playwright/test";
import { time } from "console";

export enum Operations {
  Add = "Add",
  Subtract = "Subtract",
  Multiply = "Multiply",
  Divide = "Divide",
  Concatenate = "Concatenate",
}

export class CalculatorPage {
  readonly page: Page;
  readonly buildDropdown = "selectBuild";
  readonly firstNumber = "number1Field";
  readonly secondNumber = "number2Field";
  readonly operationDropDown = "selectOperationDropdown";
  readonly calculateButton = "calculateButton";
  readonly answerValue = "numberAnswerField";
  readonly integersOnlySelector = "integerSelect";
  readonly clearButton = "clearButton";
  readonly calculatingForm = "#calculatingForm";
  readonly errorMessage = "errorMsgField";

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/BasicCalculator.html");
  }

  async selectBuild(value: string) {
    await this.page.selectOption(this.buildDropdown, value);
  }

  async setFirst(value: string) {
    await this.page.getByTestId(this.firstNumber).fill(value);
  }

  async setSecond(value: string) {
    await this.page.getByTestId(this.secondNumber).fill(value);
  }

  async setOperation(op: Operations) {
    await this.page.getByTestId(this.operationDropDown).selectOption(op);
  }

  async clickCalculate() {
    await this.page
      .getByTestId(this.calculateButton)
      .waitFor({ state: "visible", timeout: 5000 })
      .then(async () => {
        await this.page.getByTestId(this.calculateButton).click();
      });
  }

  async answer() {
    return this.page.getByTestId(this.answerValue).inputValue();
  }

  async toggleIntegersCheckbox() {
   let toggleStatus = await this.page.getByTestId(this.integersOnlySelector).isChecked()
   if (toggleStatus === false) {
    await this.page.getByTestId(this.integersOnlySelector).click();
   }
   else {
    console.log("Integers toggle is already toggled on");
   }
  }

  async clickClear() {
    await this.page.click(this.clearButton);
  }

  async assertAnswer(answerValue: string) {
    await this.waitForCalculation();
    expect(await this.answer()).toBe(answerValue);
  }

  async waitForCalculation() {
    try {
      await this.page.waitForSelector(this.calculatingForm, {
        state: "hidden",
        timeout: 10000,
      });
    } catch (e) {
      console.error("App hanging on calculation", e);
    }
  }

  async verifyErrorMessage () {
    expect(await this.page.getByTestId(this.errorMessage).isVisible())
  
  }
}
