export const xpathsHomePageFrench = {

    cardpremium : `//a[@href="https://www.americanexpress.com/fr-fr/carte-de-paiement/toutes-les-cartes/"]`,
    acceptCookies : `//button[@data-testid="granular-banner-button-accept-all"]`,
    becomeClient : `//label[@role='button' and contains(text(),'Devenir Client') and @id="label-tab-open-cards"]`,
    // becomeClient : `//label[@id="Devenir Client"]`,
    amexCards : `(//p[@role="heading" and contains(text(),'Cartes Particuliers')]//following::ul[@role='menu']//li[@role="menuitem"]//span[contains(text(),'Les Cartes AMERICAN EXPRESS')])[1]`

}