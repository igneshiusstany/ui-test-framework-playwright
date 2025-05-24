import { commonUtil } from "../commons/commonUtil";
import { xpathsRequestCardFrench } from "../pages/requestCardPageElements"
import { xpathsHomePageFrench } from "./homePageElements"

import { homePageUtil } from "./homePageUtils"

export class requestCardUtil extends commonUtil{

/**
 * Fills out the user's basic details on the request card form page.
 * 
 * Note:
 * - A Wait for page load to complete and then 1-second delay is added between interactions intentionally to avoid a crash observed 
 *   when the form is filled too quickly (likely due to frontend instability).
 * - This workaround simulates a more natural user input pace, avoiding the crash while maintaining flow.
 * 
 * @param {Object} userDetails - An object containing user form details.
 * @param {string} userDetails[].type - The input type: 'text', 'modal', or 'select'.
 * @param {string} userDetails[].value - The value to be filled or selected.
 * 
 * @example
 * const userDetails = {
 *   title: { type: 'modal', value: 'mr' },
 *   firstName: { type: 'text', value: 'John' },
 *   country: { type: 'select', value: 'FR' }
 * };
 */

async fillUserBasicDetails(userDetails){
    try{
         await this.waitForCompleteLoad()

    for (const key in userDetails){
        await this.page.waitForTimeout(1000)
        if(userDetails[key]['type'] == 'modal'){
            await this.click(xpathsRequestCardFrench[key]((userDetails[key]['value'])), `${key} Selection`)
            await this.page.waitForTimeout(1000)
        }
        else if(userDetails[key]['type'] == 'text'){
            await this.sendKeys(xpathsRequestCardFrench[key], key, userDetails[key]['value'])
        }
        else if(userDetails[key]['type'] == 'select'){
            await this.selectDropDownByValue_custom(xpathsRequestCardFrench[key], key, userDetails[key]['value'])
        }
    }
    }
    catch (e){
        console.log(`Error observed in fillUserBasicDetails : ${e}`)
    }
}


}