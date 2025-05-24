export const xpathsRequestCardFrench = {

    learnMoreGoldCard : `//a[@href="carte-de-paiement/gold-card-americanexpress/?linknav=fr-amex-cardshop-allcards-learn-GoldCardAmericanExpress<sup>®</sup>-fc" and contains(text(),'En savoir plus')]`,
    requestYourCard : `//a[@href="https://www.americanexpress.com/fr/3534?intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail" and contains(text(),'Demandez votre Carte')]`,
    /**
     * Returns an XPath selector for a civility label based on the given input.
     *
     * @param {string} MrOrMs - The civility value, e.g., 'mr' or 'ms'.
     * @returns {string} The XPath selector string targeting the label.
     */
    civility: (MrOrMs) => {
    return `//label[@for='${MrOrMs.toUpperCase()}']`;
    // return `//input[@id='${MrOrMs.toUpperCase()}']`
    },
    firstName : `//input[@id="fieldControl-input-firstName"]`,
    lastName : `//input[@id="fieldControl-input-lastName"]`,
    dateOfBirth : `//input[@id="fieldControl-input-dateOfBirth"]`,
    email: `//input[@id="fieldControl-input-email"]`,
    phone: `//input[@id="fieldControl-input-mobilePhoneNumber"]`,
    countryCodeSelect: `//select[@id="countryCode"]`,
    continueButton : `//button[@type='submit' and contains(text(),'Continuer')]`,
    personalInformationPageTitle : `//h2[contains(text(),'Vos informations personnelles')]`

}

export const textsRequestCardFrench = {

    personalInfoFormTitle : 'Vos informations personnelles'
}