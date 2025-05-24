import { expect } from '@playwright/test';
import { pageUtil } from "./page";
const assert = require('assert');

/**
 * Utility class extending Playwright's page utilities for common actions and assertions.
 */
export class commonUtil extends pageUtil {

  /**
   * Navigates to the specified URL.
   * @param {string} url - The URL to navigate to.
   */
  async goto(url) {
    try {
      await this.page.goto(url);
      console.info(`Navigated to url`);
    } catch (error) {
      console.error(`URL navigation failed`);
      throw error;
    }
  }

  async waitForCompleteLoad(){
    console.log('Waiting for dom contents and network calls')
    await this.page.waitForLoadState('load');
    await this.page.waitForLoadState('domcontentloaded')
    // await this.page.waitForLoadState('networkidle');
    
    console.log('Page succesfully loaded')
  }

  /**
   * Clicks on an element specified by the selector.
   * @param {string} selector - The selector for the element to click.
   * @param {string} fieldName - The name of the field for logging.
   */
  async click(selector, fieldName) {
    try {
      await this.page.waitForSelector(selector, { state: 'visible' });
      await this.page.click(selector);
      console.info(`${fieldName} --> clicked successfully`);
    } catch (error) {
      console.error(`Click action failed for field ${fieldName} due to exception: ${error}`);
      throw error;
    }
  }

  /**
   * Asserts that the text is visible on the page.
   * @param {string} locator - The text to locate.
   */
  async expectToBeVisible(locator) {
    try {
      await expect(this.page.getByText(locator)).toBeVisible();
      console.log(`Expected locator ${locator} is found`);
    } catch (error) {
      console.error(`Expected locator ${locator} is not found: ${error}`);
      throw error;
    }
  }

  /**
   * Asserts that an element is enabled.
   * @param {string} xpath - The XPath of the element to check.
   */
  async expectToBeEnabled(xpath) {
    try {
      await expect(this.page.locator(xpath)).toBeEnabled();
      console.log(`Expected button ${xpath} is enabled`);
    } catch (error) {
      console.error(`Expected locator ${xpath} is not enabled: ${error}`);
      throw error;
    }
  }

  /**
   * Asserts that an element contains expected text.
   * @param {string} xpath - The XPath of the element.
   * @param {string} expectedText - The text expected to be contained.
   */
  async expectToContain(xpath, expectedText) {
    try {
      await expect(this.page.locator(xpath)).toContainText(expectedText);
      console.log(`Expected text ${expectedText} is found`);
    } catch (error) {
      console.error(`Expected text ${expectedText} is not found: ${error}`);
      throw error;
    }
  }

  /**
   * Sends keys to a field.
   * @param {string} selector - The selector for the field.
   * @param {string} fieldName - Name of the field for logging.
   * @param {string} valueToBeSent - Value to enter into the field.
   */
  async sendKeys(selector, fieldName, valueToBeSent) {
    try {
      await this.page.fill(selector, valueToBeSent);
      console.info(`${valueToBeSent} --> Text value sent successfully`);
    } catch (error) {
      console.error(`Value enter in field ${fieldName} is failed due to exception: ${error}`);
      throw error;
    }
  }

  /**
   * Clears the input field.
   * @param {string} selector - The selector for the input field.
   * @param {string} fieldName - The name of the field for logging.
   */
  async clearField(selector, fieldName) {
    try {
      await this.page.fill(selector, '');
      console.info(`${fieldName} --> cleared successfully`);
    } catch (error) {
      console.error(`Unable to clear data on field ${fieldName} due to exception: ${error}`);
      throw error;
    }
  }

  /**
   * Gets the text content of an element.
   * @param {string} selector - The selector of the element.
   * @param {string} fieldName - The name of the field for logging.
   * @returns {Promise<string>} - The text content of the element.
   */
  async getText(selector, fieldName) {
    try {
      const text = await this.page.textContent(selector);
      console.info(`${fieldName} --> text retrieved: ${text}`);
      return text;
    } catch (error) {
      console.error(`${fieldName} --> text not retrieved due to exception: ${error}`);
      throw error;
    }
  }

  /**
   * Selects a dropdown option by visible text.
   * @param {string} selector - The selector of the dropdown element.
   * @param {string} ddVisibleText - The visible text to select.
   * @param {string} fieldName - The field name for logging.
   */
  async selectDropDownByVisibleText(selector, ddVisibleText, fieldName) {
    try {
      await this.page.selectOption(selector, { label: ddVisibleText });
      console.info(`Dropdown value selected for field ${fieldName} by visible text: ${ddVisibleText}`);
    } catch (error) {
      console.error(`Dropdown value not selected for field ${fieldName} due to exception: ${error}`);
      throw error;
    }
  }

  /**
   * Selects a dropdown option by value.
   * @param {string} element - The element locator.
   * @param {string} fieldName - The name of the field for logging.
   * @param {string} ddValue - The value to select.
   */
  async selectDropDownByValue_custom(element, fieldName, ddValue) {
    try {
      await this.page.selectOption(element, { value: ddValue });
      console.log(fieldName + " ==> Dropdown Value Selected by value");
    } catch (e) {
      console.error("Dropdown value not selected for field: " + fieldName + " due to exception: " + e);
      throw e;
    }
  }

  /**
   * Asserts two strings are equal.
   * @param {string} expvalue - Expected string value.
   * @param {string} actualValue - Actual string value.
   * @param {string} locatorName - Locator name for context in logs.
   */
  async assertEqualsString_custom(expvalue, actualValue, locatorName) {
    try {
      assert.strictEqual(actualValue, expvalue, `String Assertion FAILED on field ${locatorName}. Expected value was: ${expvalue}. Actual value is: ${actualValue}`);
      console.log(`String Assertion is successful on field ${locatorName}. Expected value was: ${expvalue}. Actual value is: ${actualValue}`);
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  }

  /**
   * Asserts two values are strictly equal.
   * @param {*} actual - The actual value.
   * @param {*} expected - The expected value.
   * @param {string} field - The name of the field or context.
   * @param {string} errorMessage - Error message for assertion.
   */
  async assertStrictEqual(actual, expected, field, errorMessage) {
    try {
      assert.strictEqual(actual, expected, errorMessage);
      console.log(`Success: Expected and actual values match for ${field}: Expected : ${expected}, Actual : ${actual}`);
    } catch (error) {
      console.error(`Failure: Expected and actual values don't match for ${field}: Expected : ${expected}, Actual : ${actual}`);
      console.error(error.message);
      throw error;
    }
  }

  /**
   * Asserts two lists of strings are equal by content and order.
   * @param {string[]} list1 - The first list of strings.
   * @param {string[]} list2 - The second list of strings.
   */
  async assertEqualsList_strings(list1, list2) {
    try {
      assert.strictEqual(list1.length, list2.length, "Lists have different sizes.");

      for (let i = 0; i < list1.length; i++) {
        const value = list1[i];
        if (list2.includes(value)) {
          console.log("Validation passed: Expected value " + value + " was present in the list: " + list2);
        } else {
          assert.fail("Validation failed: Expected value " + value + " was not present in the list: " + list2);
        }
      }
    } catch (e) {
      assert.fail("Unexpected exception: " + e.toString());
    }
  }
}
