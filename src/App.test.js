const faker = require('faker');
const puppeteer = require('puppeteer');
const person = {
   email: faker.internet.email(),
   password: faker.random.word(),
};
const profile = {
  name: faker.random.word(),
  surname: faker.random.word(),
  age: faker.datatype.number(),
};

const appUrlBase = 'http://localhost:3000'
const routes = {
public: {
      register: `${appUrlBase}/`,
      login: `${appUrlBase}/`,
      noMatch: `${appUrlBase}/ineedaview`,
   },
private: {
      home: `${appUrlBase}/`,
      control: `${appUrlBase}/control`,
      userboard: `${appUrlBase}/userboard`,
   },
};


//create global variables to be used in the beforeAll function
let browser
let page

beforeAll(async () => {
  // launch browser 
  browser = await puppeteer.launch(
    {
      headless: false, // headless mode set to false so browser opens up with visual feedback
      slowMo: 250, // how slow actions should be
    }
  )
  // creates a new page in the opened browser   
  page = await browser.newPage()
})

describe('Login', () => {
  test('users can login', async () => {
    await page.goto(routes.public.login);
    await page.waitForSelector('form');

    await page.click('input[name=Username]')
    await page.type('input[name=Username]', 'user')
    await page.click('input[name=Password]')
    await page.type('input[name=Password]', 'pass')
    await page.click('button[type=submit]')
    await page.waitForSelector('h2[name=Userboard]')
  }, 1600000);
});

describe('Add profile', () => {
  test('users can add, edit and delete profile', async () => {
    await page.goto(routes.private.home);
    await page.waitForSelector('button[id=ADD]');

    await page.click('button[id=ADD]')
    await page.click('input[name=name]')
    await page.type('input[name=name]', profile.name)
    await page.click('input[name=surname]')
    await page.type('input[name=surname]', profile.surname)
    await page.click('input[name=age]')
    await page.type('input[name=age]', JSON.stringify(profile.age))
    await page.click('button[type=submit]')
    await page.waitForSelector('span')
    await page.waitForTimeout(2000)
    //const profileHandle = await page.$('span')
    expect(await page.$$eval("span",node => node[node.length-3].innerText)).toBe('Name: ' + profile.name);

    await page.$$eval("button[name=edit]",node => node[node.length-1].click())
    await page.click('textarea[name=name]')
    await page.type('textarea[name=name]', "EDITTEST")
    await page.$$eval("button[name=okay]",node => node[node.length-1].click())
    expect(await page.$$eval("span",node => node[node.length-3].innerText)).toBe('Name: ' + profile.name + "EDITTEST");

    await page.$$eval("button[name=delete]",node => node[node.length-1].click())
    //await page.click(deleteButton)
    await page.$$eval("button[name=okay]",node => node[node.length-1].click())
    //await page.click(okayButton)
    browser.close()
  }, 1600000);
});



// This function occurs after the result of each tests, it closes the browser
afterAll(() => {
  
})