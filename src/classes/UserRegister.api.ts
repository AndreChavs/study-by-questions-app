export class UserRegister{
  private url:string;

  constructor(){
    this.url = `http://192.168.1.105:3000/api/userRegister`
  }

  public async userRegister<TBody>(values:TBody){
    const options = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...values})
    }
    const response = await fetch(this.url, options)
    const json = await response.json()
    return {response, json}
  }
}