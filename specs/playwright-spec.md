# Task List Page Specification

## Goal 1: Install Playwright and setup simple page object model 

### Functional requirements
- Install Playwright
- Setup a simple page object model 
- Application is an external simple calculator
    - a drop down which has selection of different builds 1 to 8 which have problems
    - Which is made up of first number input field, second number input field, drop down for add, subtract, multiple, divide & concatenate, answer field which isn't editable, and integars only toggle and clear button 

### Success criteria
- Page object framework 

## Goal 2: Implement before test class

## Functional requirements
- Include a before each test
    - sets the .goto to navigate to the url
    - sets what build to test with 
        - this should be passed through when runing the test command with for example -build 1 