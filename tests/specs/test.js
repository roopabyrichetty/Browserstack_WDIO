describe("Testing with BStackDemo", () => {
  it("Testing title on bentley.com", async () => {
      await browser.url("https://www.bentley.com/");
    await browser.waitUntil(
        async () => (await browser.getTitle()).match(),
      5000,
      "Title didn't match with BrowserStack"
    );

    //const productOnScreen = await $('//*[@id="1"]/p');
    //const productOnScreenText = await productOnScreen.getText();

    //const addToCart = await $('//*[@id="1"]/div[4]');
    //await addToCart.click();

    //const productInCart = await $('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]');

    /*await browser.waitUntil(async () => (
      await productInCart.getText()).match(productOnScreenText), 
      { timeout: 5000 }
    );*/
  });
});
