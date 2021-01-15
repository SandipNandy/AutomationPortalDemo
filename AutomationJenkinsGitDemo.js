describe('Practice with Automation Pages For way2automation :-', function () {

    it('Launch the URL into Browser', function () {
       
         browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        browser.manage().window().maximize();
        browser.getTitle().then(function (title) {

            console.log(title);

        });
        element(by.css("input[id='username']")).sendKeys('angular');
        //Click on Login Button
        element(by.model("Auth.user.password")).sendKeys('password');
        //Click on Login Button
        element(by.model("model[options.key]")).sendKeys('Hi! Welcome to Automation Portal');
        browser.sleep(1000);
        //Click on Login Button
        element(by.xpath("//button[contains(text(),'Login')]")).click();
        browser.sleep(2000);
        //Checking whether we can can login in this page.
        var abc=element(by.xpath("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/p[1]")).getText();
        expect(abc).toBe("You're logged in!!");
        browser.sleep(2000);
        //LogOut from this page
        element(by.xpath("//a[contains(text(),'Logout')]")).click();
        browser.sleep(2000);
    });
});