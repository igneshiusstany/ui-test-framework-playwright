import { commonUtil } from "../commons/commonUtil";
import { constant } from "../commons/constants"

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

async navigateToApplication(){
    await this.goto(constant.baseUrl)
    await this.page.waitForTimeout(2000) //giving a few seconds for the initial pop up to load.
}

}