/// <reference path="../typings/globals/jquery/index.d.ts" />
interface ValidsInterface {
  valids(): boolean;
}
class User implements ValidsInterface{
  name: string;
  age: number;

  public valids(): boolean{
    return false;
  }
}
class Talk implements ValidsInterface{
  cont: string;
  time: number;

  public valids(): boolean {
    return true;
  }
}
class GenericRepository<T extends ValidsInterface> {
  private _url : string;
  constructor (url: string) {
    this._url = url;
  }
  public getAsync() {
    // return new Promise((resolve : (entities: T[]) => void,reject)=>{
    return Q.Promise((resolve: (entities: T[]) => void, reject) => {
      $.ajax({
        url: this._url,
        type : "GET",
        dataType: "json",
        success :(data) => {
                    // var list = T[];
          console.log("aaa");
          var items = <T[]>data.items;
          for (var i=0; i< items.length; i++) {
            let res = items[i].valids();
            if (res) {
              console.log('valide is true');
            } else {
              console.log('valide is false');
            }
          }

          console.log('_url = ' + this._url);
          resolve(items);
        },
        error :(e) => {
          reject(e)
        }
      });
    });
  }
}
let genericRepo = new GenericRepository<User>('http://localhost:4000/users/genericUser');
genericRepo.getAsync().then((users: User[]) => {
  users.forEach(function(user: User){
    console.log(user.name);
  });
});
// let grt = new GenericRepository<Talk>('http://localhost:4000/users/genericTalk');
// grt.getAsync().then((talks: Talk[])=> {
//   talks.forEach(function(talk){
//     console.log(talk.cont);
//   });
// });
