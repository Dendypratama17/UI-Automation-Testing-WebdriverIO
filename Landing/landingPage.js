describe("User ghost", () => {
  it("Going to landing page", async() => {
    await browser.url("https://app.aquarius.axeleration.id/career")
    await expect(browser).toHaveUrl("https://app.aquarius.axeleration.id/career")
  });
  it('Going to page About Us', async() => {
    await browser.$('[href="https://privy.id/enterprise-contact"]').click();
    await browser.pause(2000);
  });
  it('Going to Blog & News', async() => {
    await browser.newWindow('https://app.aquarius.axeleration.id/career');
    await browser.$('[href="https://blog.privy.id/"]').click();
    await browser.pause(2000);
  });
  it('Going to Jobs', async() => {
    await browser.newWindow('https://app.aquarius.axeleration.id/career'); 
    await browser.$("#landing-nav > [aria-current='page'] > .btn").click();
    await browser.pause(2000);
  });
  it('Show list Jobs & filtering', async() => {
    // scroll into view Jobs
      const elem = await $('.py-16');
      // scroll to specific element
      await elem.scrollIntoView();
      await elem.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000) 
      //search "Your dream job" >> select 
      await browser.$("[placeholder='Your dream job']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(3) .select__option-text").click();
      await browser.pause(2000);
      //filter department
      await browser.$("[placeholder='Select Department']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(2) .select__option-text").click();
      await browser.pause(2000);
      //filter location
      await browser.$("[placeholder='Select Location']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(4) .select__option-text").click();
      await browser.pause(2000);
  });
  it("Detail Job", async () => {
      //detail job
      const job = await $('section:nth-of-type(4) > .card__body > .flex')
      await job.scrollIntoView();
      await job.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000);
      await browser.$('section:nth-of-type(4) .btn').click();
      await browser.pause(2000);
      //show detail
      const description = await $('div.card > .card__body')
      await description.scrollIntoView();
      await description.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000);
    });
    it("Apply Job before login", async () => {
      //click apply job
      await browser.$('.mt-2.btn').click();
      await browser.pause(2000);
    });
    it.skip("Delete Session", async () => {
      await browser.deleteSession();
      // Selesai, tutup browser
    });
});
describe("Login dulu baru apply", () => {
    it("Going to landing page", async () => {
      //New tab chrome
      await browser.url("chrome://new-tab-page/")
      await expect(browser).toHaveUrl("chrome://new-tab-page/")
      await browser.performActions([{
        type: 'key',
        id: 'keyboard',
        actions: [{ type: 'keyDown', value: '' }]
      }])
      //going to privyCareer
      await browser.url("https://app.aquarius.axeleration.id/career")
      await expect(browser).toHaveUrl("https://app.aquarius.axeleration.id/career")
    });
    it("Login oauth", async () => {
      //login oauth
      await browser.$("aria/Login Now").click()
      await expect(browser).toHaveUrl("https://stg-oauth.privy.id/login?response_type=code&client_id=s9cB0fFWA6JQVusWS9XZGkfalNA8A1KTRR9B85vMMWE&redirect_uri=https://app.aquarius.axeleration.id/auth/callback&scope=public+read&state=%7B%22redirect%22:%22/career%22,%22profile%22:%22oauth%22%7D")
      await browser.pause(2000);
      await browser.$("#__BVID__4").click()
      await browser.$("#__BVID__4").setValue("rta")
      await browser.$("#__BVID__4").setValue("rta4199")
      await browser.$("/html/body/div[1]/div/div[2]/form/div[2]").click()
      await browser.$("#tag-lg001").click()
      await browser.$("#__BVID__6").click()
      await browser.$("#__BVID__6").setValue("Demoakun@01")
      await browser.$("#tag-lg001").click()
      await expect(browser).toHaveUrl("https://app.aquarius.axeleration.id/career")
      //validasi login
      await browser.$("[href='/career/my-application'] .text-base-white").waitForExist({ timeout: 5000 });
      await browser.pause(2000);
    })
    it("Search Job by filtering", async () => {
      // scroll into view Jobs
      const elem = await $('.py-16');
      // scroll to specific element
      await elem.scrollIntoView();
      await elem.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000) 
      //search "Your dream job" >> select 
      await browser.$("[placeholder='Your dream job']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(3) .select__option-text").click();
      await browser.pause(2000);
      //filter department
      await browser.$("[placeholder='Select Department']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(2) .select__option-text").click();
      await browser.pause(2000);
      //filter location
      await browser.$("[placeholder='Select Location']").click();
      await browser.pause(1000);
      await browser.$("[data-popper-placement='top-start'] button:nth-of-type(4) .select__option-text").click();
      await browser.pause(2000);
    }); 
    it("Detail Job", async () => {
      //detail job
      const job = await $('section:nth-of-type(4) > .card__body > .flex')
      await job.scrollIntoView();
      await job.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000);
      await browser.$('section:nth-of-type(4) .btn').click();
      await browser.pause(2000);
      //show detail
      const description = await $('div.card > .card__body')
      await description.scrollIntoView();
      await description.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(2000);
    });
    it("Apply Job", async () => {
      //click apply job
      await browser.$('.mt-2.btn').click();
      await browser.pause(2000);
      //submit job
      const submit = await $('.dropzone');
      await submit.scrollIntoView();
      await submit.scrollIntoView({ block: 'center', inline: 'center' });
      //upload file
      const inputFileSelector = 'input[type="file"]';
      const filePath = '/Users/ycs9t1/Documents/akselerasi/UI-wdio/ui-automation-testing/Document/Test.pdf'; 
      await browser.$(inputFileSelector).addValue(filePath);
      await browser.pause(1000);
      //input Linkedin URL
      await browser.$('[placeholder="Input Linkedin URL"]').setValue('linkedin URL');
      await browser.pause(1000);
      //input URL portofolio
      await browser.$('[placeholder="Input Portfolio URL"]').setValue('portofolio URL');
      await browser.pause(1000);
      //input github URL
      await browser.$('[placeholder="Input Github URL"]').setValue('github URL');
      await browser.pause(1000);
      //input current company
      await browser.$('[placeholder="Input Current Company"]').setValue('PT PRIVY IDENTITAS DIGITAL');
      await browser.pause(1000);
      //additional information
      await browser.$('.textarea__input').setValue('I have experience 5 year as Quality Assurance');
      await submit.scrollIntoView({ block: 'center', inline: 'center' });
      await browser.pause(3000);
      // submit
      await browser.$('.mt-4').click();
      await browser.pause(2000);
    });
    it.skip("Delete Session", async () => {
      // Selesai, tutup browser
      await browser.deleteSession();
    });
    it('Logout', async() => {
      //cancel logout
      await browser.$('.btn--sm.btn--variant-outline').click();
      await browser.$('.bg-gray-5').click();
      await browser.pause(1000);
      //logout
      await browser.$('.btn--sm.btn--variant-outline').click();
      await browser.$('button:nth-of-type(2)').click();
      await browser.pause(1000);
      await expect(browser).toHaveUrl('https://stg-oauth.privy.id/login?client_id=s9cB0fFWA6JQVusWS9XZGkfalNA8A1KTRR9B85vMMWE&redirect_uri=https%3A%2F%2Fapp.aquarius.axeleration.id%2Fauth%2Fcallback&response_type=code&scope=public+read');
    });
});
describe('Show detail Jobs baru Login', () => {
  it("Going to landing page", async() => {
    await browser.url("https://app.aquarius.axeleration.id/career")
    await expect(browser).toHaveUrl("https://app.aquarius.axeleration.id/career")
  });
  it('Show list Jobs & filtering', async() => {
    // scroll into view Jobs
    const elem = await $('.py-16');
    // scroll to specific element
    await elem.scrollIntoView();
    await elem.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(2000) 
    //search "Your dream job" >> select 
    await browser.$("[placeholder='Your dream job']").click();
    await browser.pause(1000);
    await browser.$("[data-popper-placement='top-start'] button:nth-of-type(3) .select__option-text").click();
    await browser.pause(2000);
    //filter department
    await browser.$("[placeholder='Select Department']").click();
    await browser.pause(1000);
    await browser.$("[data-popper-placement='top-start'] button:nth-of-type(2) .select__option-text").click();
    await browser.pause(2000);
    //filter location
    await browser.$("[placeholder='Select Location']").click();
    await browser.pause(1000);
    await browser.$("[data-popper-placement='top-start'] button:nth-of-type(4) .select__option-text").click();
    await browser.pause(2000);
  });
  it("Detail Job", async () => {
    //detail job
    const job = await $('section:nth-of-type(4) > .card__body > .flex')
    await job.scrollIntoView();
    await job.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(2000);
    await browser.$('section:nth-of-type(4) .btn').click();
    await browser.pause(2000);
    //show detail
    const description = await $('div.card > .card__body')
    await description.scrollIntoView();
    await description.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(2000);
  });
  it("Apply Job before login >> Lanjut Login", async () => {
    //click apply job
    await browser.$('.mt-2.btn').click();
    await browser.pause(2000);      
    await browser.$('.mr-1[data-v-5f48abd3]').click();
    await browser.$('.mt-2.btn').click();
    await browser.$('.ml-1[data-v-5f48abd3]').click();
  });
  it("Login oauth", async () => {
    //login oauth
    // await browser.$("#__BVID__4").click()
    // await browser.$("#__BVID__4").setValue("rta")      
    // await browser.$("#__BVID__4").setValue("rta4199")
    // await browser.$("/html/body/div[1]/div/div[2]/form/div[2]").click()
    // await browser.$("#tag-lg001").click()
    await browser.$("#__BVID__6").click()
    await browser.$("#__BVID__6").setValue("Demoakun@01")
    await browser.$("#tag-lg001").click()
    await expect(browser).toHaveUrl("https://app.aquarius.axeleration.id/career/detail/9c61f6d0-76fb-4aef-a91c-a3f792d248ca/form")
    //validasi login
    await browser.$("[href='/career/my-application'] > .btn").waitForExist({ timeout: 5000 });
    await browser.pause(2000);
  });
  it("Apply Job", async () => {
    //submit job
    const submit = await $('.dropzone');
    await submit.scrollIntoView();
    await submit.scrollIntoView({ block: 'center', inline: 'center' });
    //upload file
    const inputFileSelector = 'input[type="file"]';      
    const filePath = '/Users/ycs9t1/Documents/akselerasi/UI-wdio/ui-automation-testing/Document/Test.pdf'; 
    await browser.$(inputFileSelector).addValue(filePath);
    await browser.pause(2000);
    //input Linkedin URL
    await browser.$('[placeholder="Input Linkedin URL"]').setValue('linkedin URL');
    await browser.pause(1000);
    //input URL portofolio
    await browser.$('[placeholder="Input Portfolio URL"]').setValue('portofolio URL');
    await browser.pause(1000);
    //input github URL      
    await browser.$('[placeholder="Input Github URL"]').setValue('github URL');
    await browser.pause(1000);
    //input current company
    await browser.$('[placeholder="Input Current Company"]').setValue('PT PRIVY IDENTITAS DIGITAL');
    await browser.pause(1000);
    //additional information
    await browser.$('.textarea__input').setValue('I have experience 5 year as Quality Assurance');
    await submit.scrollIntoView({ block: 'center', inline: 'center' });
    await browser.pause(3000);
    // submit
    await browser.$('.mt-4').click();
    await browser.pause(2000);
  });
  it('Logout', async() => {
    //cancel logout
    await browser.$('.btn--sm.btn--variant-outline').click();
    await browser.$('.bg-gray-5').click();
    await browser.pause(1000);
    //logout
    await browser.$('.btn--sm.btn--variant-outline').click();
    await browser.$('button:nth-of-type(2)').click();
    await expect(browser).toHaveUrl('https://stg-oauth.privy.id/login?client_id=s9cB0fFWA6JQVusWS9XZGkfalNA8A1KTRR9B85vMMWE&redirect_uri=https%3A%2F%2Fapp.aquarius.axeleration.id%2Fauth%2Fcallback&response_type=code&scope=public+read');
  });
  it("Delete Session", async () => {
    await browser.deleteSession();
    // Selesai, tutup browser
  });
});