describe("Jobs Detail", () => {
    it("Positive Case", async () => {
      browser.url('https://app.aquarius.axeleration.id/career')
      await browser.pause(2000);
      await driver.$('button=Login Now').click();
      const pageTitle2 = await browser.getTitle();
      expect(pageTitle2).toEqual("PrivyID Oauth");
      await driver.$('input[name="user[privyId]"]').setValue('TE4455');
      await browser.pause(1000);
      await driver.$('#tag-lg001').click();
      await driver.$('#tag-lg001').click();
      await browser.pause(1000);
      await driver.$('input[name="user[secret]"]').setValue('Akuntes1');
      await browser.pause(1000);
      await driver.$('#tag-lg001').click();
      await driver.$('#tag-lg001').click();
      await browser.pause(1000);
      browser.url('https://app.aquarius.axeleration.id/admin/job-posting')
      await browser.pause(2000);
      await driver.$('span=Jobs').click();
      await browser.pause(2000);
      await driver.$('.datatable__body > div:nth-of-type(1) .dropdown').click();
      await browser.pause(2000);
      await driver.$("[data-popper-placement='bottom-end'] button:nth-of-type(1)").click();
      await browser.pause(2000);
    //   const pageTitle = await browser.getTitle();
    //   expect(pageTitle).toEqual("Detail");
      await expect($('.breadcrumbs')).toHaveTextContaining('Detail')
      await driver.$('.nav--lines > li:nth-of-type(2)').click();
      await browser.pause(2000);
      await driver.$('.nav--lines > li:nth-of-type(3)').click();
      await browser.pause(2000);
      await driver.$('.nav--lines > li:nth-of-type(4)').click();
      await browser.pause(2000);

    });
});