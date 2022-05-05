const { Button } = require("selenium-webdriver");
const { WebElement } = require("selenium-webdriver");
const { Builder, By, Key, util } = require ("selenium-webdriver");
async function openThePage(){
    let driver = await new Builder().forBrowser("firefox").build();


    await driver.get("https://demoqa.com/text-box");

    //Filling the fields

    await driver.findElement(By.id("userName")).sendKeys("Nare");
    await driver.findElement(By.id("userEmail")).sendKeys("nare@gmail.com");
    await driver.findElement(By.id("currentAddress")).sendKeys("Yerevan");
    await driver.findElement(By.id("permanentAddress")).sendKeys("Yerevan");

    //Clicking on submit button

    var Element = driver.findElement(By.id("submit"));

    driver.executeScript("arguments[0].scrollIntoView(true);",Element);
    await driver.findElement(By.id("submit")).click();
}
openThePage();
