import{Locator,expect,Page}from "@playwright/test";
import { ElementUtil  } from "../util/Elementutil";
export class HomePage{
    page:Page;
    util:ElementUtil;
    private readonly menuBar:Locator;
    private readonly  logout:Locator;

    constructor(page:Page){
        this.page=page;
        this.util=new ElementUtil(page);
        this.menuBar=page.locator('.oxd-userdropdown-tab');
        this.logout=page.getByText('Logout',{exact:true});
    }
    async goToPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    }

    async logoutFun(){
        await this.util.click(this.menuBar);
        await this.util.click(this.logout);
    
}
}