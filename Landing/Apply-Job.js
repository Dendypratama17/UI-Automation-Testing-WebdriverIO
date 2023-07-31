describe("Apply Now", () => {
    it("Positif Case", async () => {
      browser.url('https://app.aquarius.axeleration.id/career')
      await browser.pause(3000);
      const pageTitle = await browser.getTitle();
      expect(pageTitle).toEqual("Privy Career");
      await driver.$('section:nth-of-type(4) .btn').click();
      await browser.pause(1000);
      await driver.$('button=Apply Now').click();
      await browser.pause(1000);
      await driver.$('button[data-testid="btn"].btn--default.btn--variant-outline.btn--md.ml-1.flex-1.bg-base-black.text-base-white').click();
      await browser.pause(1000);
      // Login
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
      const inputFileSelector = 'input[type="file"]';
      // Change your file path
      const filePath = '/Users/DPT7573/ui-automation-testing/Document/Test.pdf'; 
      await browser.$(inputFileSelector).addValue(filePath);
      await browser.pause(2000);
      await driver.$('input[placeholder="Input Linkedin URL"]').setValue('Test');
      await driver.$('input[placeholder="Input Portfolio URL"]').setValue('Test');
      await driver.$('input[placeholder="Input Github URL"]').setValue('Test');
      await driver.$('input[placeholder="Input Current Company"]').setValue('Test');
      await driver.$('textarea[placeholder="Input Aditional Information"]').setValue('Test');
      await driver.$('button=Apply Now').click();
      await browser.pause(2000);
    });
})