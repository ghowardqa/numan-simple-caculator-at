import { test, expect } from '@playwright/test';
import { CalculatorPage, Operations } from '../../pages/CalculatorPage';

test.beforeEach(async ({ page }) => {
  const calc = new CalculatorPage(page);
  await calc.goto();
});

test.describe('Calculator page object tests', () => {
  test('adds two numbers', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('2');
    await calc.setSecond('3');
    await calc.setOperation(Operations.Add);
    await calc.clickCalculate()
    await calc.assertAnswer('5');
  });

    test('adds negative and positive numbers together', async ({ page }) => {
      const calc = new CalculatorPage(page);
      await calc.setFirst('-2');
      await calc.setSecond('3');
      await calc.setOperation(Operations.Add);
      await calc.clickCalculate()
      await calc.assertAnswer('1');
    });

  test('concatenates values', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('12');
    await calc.setSecond('34');
    await calc.setOperation(Operations.Concatenate);
    await calc.clickCalculate();
    await calc.assertAnswer('1234');
  });

  test('subtracts two numbers', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
    await calc.setFirst('10');
    await calc.setSecond('4');
    await calc.setOperation(Operations.Subtract);
    await calc.clickCalculate();
   await calc.assertAnswer('6');
  });

  test('multiplies two numbers', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.goto();
    await calc.setFirst('7');
    await calc.setSecond('8');
    await calc.setOperation(Operations.Multiply);
    await calc.clickCalculate();
    await calc.assertAnswer('56');
  });

  test('divides two numbers', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('20');
    await calc.setSecond('4');
    await calc.setOperation(Operations.Divide);
    await calc.clickCalculate()
    await calc.assertAnswer('5');
  });

  
  test('division by zero handled', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('5');
    await calc.setSecond('0');
    await calc.setOperation(Operations.Divide);
    await calc.clickCalculate();
    await calc.verifyErrorMessage();
  });

  test('large numbers multiply', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('1000000000');
    await calc.setSecond('1000000');
    await calc.setOperation(Operations.Multiply);;
    await calc.clickCalculate();
    await calc.assertAnswer('1000000000000000');
  });

  test('non-numeric input produces empty or error', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('abc');
    await calc.setSecond('abc');
    await calc.setOperation(Operations.Add); 
    await calc.clickCalculate();
    await calc.verifyErrorMessage();
  });

  test('integer only truncates decimals', async ({ page }) => {
    const calc = new CalculatorPage(page);
    await calc.setFirst('2.9');
    await calc.setSecond('1.6');
    await calc.setOperation(Operations.Add)
    await calc.toggleIntegersCheckbox();
    await calc.clickCalculate()
    await calc.assertAnswer('4');
  });
});
