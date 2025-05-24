import { commonUtil } from "../commons/commonUtil";

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
    await this.page.waitForTimeout(1000)
    await this.click(locator, `${action} Cookie button`)
    await this.page.waitForTimeout(3000)
    }
    catch{
        console.log('Cookie pop up is not observed')
    }
}

}