import { Expect,Locator,Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
type flexiLocator=Locator|string;

export class ElementUtil{
    page:Page;
    defaultTimeout:number=3000;


    constructor(page:Page,timeout:number=3000){
        this.page=page;
        this.defaultTimeout=timeout;
    }

    private getLocator(locator:flexiLocator):Locator{
        if(typeof locator=='string'){
            return this.page.locator(locator);
        }
        return locator;
    }

    async click(locator:flexiLocator):Promise<void>{
        await this.getLocator(locator).click();

    }
    async fill(locator:flexiLocator,text:string):Promise<void>{
        await this.getLocator(locator).fill(text);
        
    }


}