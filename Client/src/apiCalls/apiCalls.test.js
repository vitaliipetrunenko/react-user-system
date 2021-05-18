import { fetchUser, fetchUsers, getProfiles, getStats, loadUserFromToken, loginUser, profileChange, regUser } from './apiCalls'
import { Server } from "miragejs";

new Server({
  routes() {
    this.namespace = "api";

    this.post("/*", () => {
      return (JSON.stringify({value:"TEST"}))
      ;
    });
    this.get("/*", () => {
        return (JSON.stringify({value:"TEST"}))
        ;
      });
      this.put("/*", () => {
        return (JSON.stringify({value:"TEST"}))
        ;
      });
      this.patch("/*", () => {
        return (JSON.stringify({value:"TEST"}))
        ;
      });
      this.delete("/*", () => {
        return (JSON.stringify({value:"TEST"}))
        ;
      });
  }
});



it('loginUser', async () => {
     const value = await loginUser(null,"POST");
     expect(value.value).toBe("TEST");
  })
  it('regUser', async () => {
    const value = await regUser(null,"POST");
    expect(value.value).toBe("TEST");
 })
 it('fetchUser', async () => {
    const value = await fetchUser(null);
    expect(value.value).toBe("TEST");
 })
 it('loadfromtoken', async () => {
    const value = await loadUserFromToken(null);
    expect(value.value).toBe("TEST");
 })
 it('getProfiles', async () => {
    const value = await getProfiles(null,"POST");
    expect(value.value).toBe("TEST");
    
 })
 it('profileChange', async () => {
    const value = await profileChange(null,"POST");
    expect(value.value).toBe("TEST");
 })
 it('getStats', async () => {
    const value = await getStats();
    expect(value.value).toBe("TEST");
 })
 it('fetchUsers', async () => {
    const value = await fetchUsers("POST");
    expect(value.value).toBe("TEST");
 })
