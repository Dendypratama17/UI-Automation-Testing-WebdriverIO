describe("Applicant Detail", () => {
    it("Positif Case", async () => {
      browser.url('https://app.aquarius.axeleration.id/career')
      await browser.pause(2000);
      await driver.$('button=Login Now').click();
      const pageTitle2 = await browser.getTitle();
      expect(pageTitle2).toEqual("PrivyID Oauth");
      await driver.$('input[name="user[privyId]"]').setValue('UAT013');
      await browser.pause(1000);
      await driver.$('#tag-lg001').click();
      await driver.$('#tag-lg001').click();
      await browser.pause(1000);
      await driver.$('input[name="user[secret]"]').setValue('Akuntes1');
      await browser.pause(1000);
      await driver.$('#tag-lg001').click();
      await driver.$('#tag-lg001').click();
      await browser.pause(2000);
      browser.url('https://app.aquarius.axeleration.id/admin/job-posting')
      await browser.pause(2000);
      await driver.$('span=Applicant').click();
      await browser.pause(2000);
      await driver.$('#icon-more').click();
      await browser.pause(2000);
      await driver.$('button=Detail').click();
      await browser.pause(2000);
      const pageTitle = await browser.getTitle();
      expect(pageTitle).toEqual("Applicant Detail");
      await driver.$('span=Test result').click();
      await browser.pause(2000);
      await driver.$('span=Interview note').click();
      await browser.pause(2000);
      await driver.$('span=Documents').click();
      await browser.pause(2000);
    });
});