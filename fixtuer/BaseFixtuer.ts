import{test as base,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";


type MyFixtuer={
    homePage:HomePage;
}
export const test =base.extend<MyFixtuer>({
    homePage:async({page,baseURL},use,testInfo)=>{
        const loginPage=new LoginPage(page);
        await loginPage.goToLoginPage(baseURL!);
      await loginPage.doLoginWithValidCredentails(testInfo.project.metadata.username,testInfo.project.metadata.password);
      const homePage = new HomePage(page);

      await use(homePage);
}
})
export{expect};


