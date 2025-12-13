import{Locator,expect,Page} from "@playwright/test";
import { ElementUtil } from "../util/Elementutil";

export class LoginPage{
    page:Page;
    util:ElementUtil;
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly login:Locator;


    constructor(page:Page){
        this.page=page;
        this.util=new ElementUtil(page);
        this.username=page.getByPlaceholder('Username');
        this.password=page.getByPlaceholder('Password');
        this.login=page.getByRole("button",{name:'Login'});
    }

    async goToLoginPage(baseURL:string){
        await this.page.goto(baseURL);

    }

    async doLoginWithValidCredentails(username:string,password:string):Promise<void>{
        await this.util.fill(this.username,username);
        await this.util.fill(this.password,password);
        await this.util.click(this.login);
    }
}