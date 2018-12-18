///<reference path="../node_modules/@types/Handlebars/index.d.ts" />
///<reference path="../node_modules/@types/jquery/index.d.ts" />
///<reference path="../node_modules/@types/q/index.d.ts" />
class ViewAsync {
  private _container: string;
  private _templateUrl: string;
  private _serviceUrl: string;
  private _args: string;

  constructor(config: any) {
    this._container = config.container;
    this._templateUrl = config.templateUrl;
    this._serviceUrl = config.serviceUrl;
    this._args = config.args;
  }

  private _loadJsonAsync(url: string, args: any) {
    return Q.Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        data: args,
        success: (json) => {
          // console.log(json);
          resolve(json);
        },
        error: (e) => {
          reject(e);
        }
      });
    });
  }
  private _loadHbsAsync(url: string) {
    return Q.Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        type: "GET",
        dataType: "text",
        success: (hbs) => {
          // console.log(hbs);
          resolve(hbs);
        },
        error: (e) => {
          reject(e);
        }
      });
    });
  }
  private _compileHbsAsync(hbs: string) {
    return Q.Promise(function(resolve, reject) {
      try {
        var template : any = Handlebars.compile(hbs);
        resolve(template);
      }
      catch (e) {
        reject(e);
      }
    });
  }
  private _jsonToHtmlAsync(template: any, json: any) {
    return Q.Promise(function(resolve, reject) {
      try {
        var html = template(json);
        resolve(html);
      }
      catch (e) {
        reject(e);
      }
    });
  }
  private _appendHtmlAsync(html: string, container: string) {
    return Q.Promise((resolve, reject) => {
      try {
        var $container : any = $(container);
        if ($container.length==0) {
          throw new Error("Container not found!");
        }
        $($container).html(html);
        resolve($(this._container));
      }
      catch (e) {
        reject(e);
      }
    });
  }

  public renderAsync () {
    return Q.Promise((resolve, reject) => {
      try {
        var getJson = this._loadJsonAsync(this._serviceUrl, this._args);
        var getTemplate = this._loadHbsAsync(this._templateUrl)
                .then(this._compileHbsAsync);

        Q.all([getJson, getTemplate]).then((result) => {
          var json = result[0];
          var template = result[1];

          this._jsonToHtmlAsync(template, json).then((html: string)=>{
              return this._appendHtmlAsync(html, this._container);
          })
          .then(($container: any) => {
            resolve($container);
          });

        });
      }
      catch (error) {
        reject(error);
      }
    });
  }


}

const serviceUrl = 'http://localhost:4000/users/asynow';
const templateUrl= 'http://localhost:4000/users/asynow_temp';

let conf = {container:'shome', serviceUrl: serviceUrl, templateUrl: templateUrl, args: {'way':'getData'}};

let viewAsync = new ViewAsync(conf);
viewAsync.renderAsync();
