import{test,expect} from "../fixtuer/BaseFixtuer";
import { HomePage } from "../pages/HomePage";

test("Testing the login funtnality of an application",  {
    tag: '@smoketest',
    annotation: [
      { type: 'issue', description: 'Login smoke test' }
    ]
},async({homePage})=>{
  // Test implementation here
  await homePage.navigateTo();
});


