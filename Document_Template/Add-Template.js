describe("Add-Template", () => {
  it("Positif Case", async () => {
    browser.url('https://app.aquarius.axeleration.id/career')
    await browser.pause(2000);
    await driver.$('button=Login Now').click();
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual("PrivyID Oauth");
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
    await driver.$('#sidebar-menu-doc-template').click();
    const pageTitle2 = await browser.getTitle();
    expect(pageTitle2).toEqual("Document template");
    await browser.pause(2000);
    await driver.$('button=Add template').click();
    await driver.$('#write_doc_title').setValue('Dinas');
    await driver.$('#write_doc_category').setValue('SPPD');
    await browser.pause(2000);
    // const inputFileSelector = 'input[type="file"]';
    // const filePath = '/Users/DPT7573/ui-automation-testing/Document/Test.pdf';  
    // await browser.$(inputFileSelector).addValue(filePath);
    const filePath = './Document/Test.pdf';
    const remoteFilePath = await browser.uploadFile(filePath)
    await $('input[type="file"').addValue(remoteFilePath)
    await browser.pause(5000);
    await driver.$('button=Preview').click();
    await browser.pause(3000);
    const pageTitle3 = await browser.getTitle();
    expect(pageTitle3).toEqual("Preview");
    await browser.pause(2000);
    await driver.$('button=Full Name').click();
    await driver.$('button=NIK').click();
    await driver.$('button=Date Of Birth').click();
    await driver.$('button=Offer Salary').click();
    await driver.$('button=Save').click();
    await driver.$('#input-doc-version').setValue('Test1');
    await driver.$('#input-doc-note').setValue('Test2');
    await driver.$('/html/body/div[1]/div/div/main/div[3]/div/div/div[2]/div/button[2]').click();
    await driver.$('/html/body/div[1]/div/div/main/div[3]/div/div/div[2]/div/button[2]').click();
    await browser.pause(9000);
  });
});