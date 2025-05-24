import { test } from "@playwright/test";
import { commonUtil } from "../commons/commonUtil";
import { xpathsHomePageFrench } from "../pages/homePageElements"
import { homePageUtil } from "../pages/homePageUtils"
import { requestCardUtil } from "../pages/requestCardUtils"
import { xpathsRequestCardFrench, textsRequestCardFrench } from "../pages/requestCardPageElements"
import { goldCardRequestor } from "../test-data/mockUserDetails"



test.beforeEach(async ({ page }) => {
    const action = new commonUtil(page)
  //Cookie handler initiation. Monitors in the background for cookie pop up and accepts it.
  action.startPersistentCookieMonitor(xpathsHomePageFrench.acceptCookies, 'Accept')
});


test('Validate User is able to request for a gold card @smoke, @regression', async ({ page }) => {

    test.info().annotations.push({ type: 'Description', description: 'test to validate if User is able to request for a gold card' })

    const action = new commonUtil(page)
    const hpUtil = new homePageUtil(page)
    const rcUtil = new requestCardUtil(page)

    
    await test.step('navigation', async () => {
        await hpUtil.navigateToApplication()
    })

    await test.step('Click on amex card from menu', async () => {
        // await action.click(xpathsHomePageFrench.cardpremium, 'Cartes Particuliers Button')
        await hpUtil.navigateToAmexCardsPage()
    }
    )

    await test.step('Click on Learn more on Gold card', async () => {
        await action.click(xpathsRequestCardFrench.learnMoreGoldCard, 'Learn more Button')
    }
    )

    await test.step('Click on Request Your Card', async () => {
        await action.click(xpathsRequestCardFrench.requestYourCard, 'Request your card Button')
    }
    )
    await test.step('Fill Basic details', async () => {
        await rcUtil.fillUserBasicDetails(goldCardRequestor)
    }
    )
    await test.step('Click on continue button', async () => {
        await action.click(xpathsRequestCardFrench.continueButton, 'continueButton ')  
    }
    )
    await test.step('Validate if successfully navigated to the next page', async () => {
        await action.expectToBeVisible(textsRequestCardFrench.personalInfoFormTitle)
    
    }
    )
}
)