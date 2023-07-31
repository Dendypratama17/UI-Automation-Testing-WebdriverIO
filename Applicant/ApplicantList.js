describe("Applicant List", () => {
  it("Positif Case", async () => {
    browser.url('https://app.aquarius.axeleration.id//job-posting')
    await browser.pause(2000);
    await driver.$("//ul[@class='nav nav--pills nav--align-left nav--vertical sidebar__nav !text-base-white']//a[@href='/admin/applicant']//span[@class='freetext freetext--body freetext--normal freetext--normalcase text-base-white']").click()
    // await driver.$('#sidebar-menu-doc-template').click();
    // await browser.pause(2000);
    // await driver.$('#icon-more').click();
    // await browser.pause(2000);
    // await driver.$('button=Edit').click();
    // await browser.pause(2000);
    // await driver.$('#template-title').setValue('Document Release');
    // // await driver.$('button=Add').click();
    // await driver.$('#text_1').setValue('Text 0');
    // await driver.$('button=Save').click();
    // await browser.pause(2000);
  });
});