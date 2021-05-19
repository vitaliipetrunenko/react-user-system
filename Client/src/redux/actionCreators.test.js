import { setTokenAC, setUserAC } from "./actionCreators";


it('set user AC', async () => {
    const testObj = {name:test}
    const value = await setUserAC(testObj);
    expect(value.user).toBe(testObj);
 })
 it('set token AC', async () => {
     const testObj = {token:"test"}
   const value = await setTokenAC(testObj);
   expect(value.token).toBe(testObj);
})