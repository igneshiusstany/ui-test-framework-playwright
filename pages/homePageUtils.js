import { commonUtil } from "../commons/commonUtil";
import { constant } from "../commons/constants"
import { xpathsHomePageFrench } from "../pages/homePageElements"

export class homePageUtil extends commonUtil{

    /**
     * 
     * @param {xpath} locator - Locator for accept/reject cookies button
     * @param {string} action - Type for action performed(accept/reject) for logging which action is performed
     * Clicks on the accept/reject cookie button based on the locator passed
     * If cookie popup is not observed, a logging message is printed
     */
async handleCookies(locator, action){
    try{
    await this.click(locator, `${action} Cookie button`)
    await this.waitForCompleteLoad()
    }
    catch{
        console.log('Cookie pop up is not observed')
    }
}

/**
 * Navigates to the application's base URL.
 * 
 * Adds a short timeout after navigation to allow any initial pop-ups or dynamic content to load.
 * Useful for cases where elements may appear immediately after the page loads (e.g., cookie banners).
 * 
 * @async
 */
async navigateToApplication(){
    await this.goto(constant.baseUrl);
    await this.page.waitForTimeout(3000); // Allow time for initial popups
}

/**
 * Navigates to the Amex Cards page via the homepage.
 * 
 * Clicks through the "Become Client" menu and then selects the "Amex Cards" option.
 * 
 * @async
 */
async navigateToAmexCardsPage(){
    await this.click(xpathsHomePageFrench.becomeClient, 'Become client menu ');
    await this.click(xpathsHomePageFrench.amexCards, 'Amex cards ');
}


}