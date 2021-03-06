type cb = (json: any) => void;

class ViewAsync {
  private _container: string;
  private _templateUrl: string;
  private _serviceUrl: string;
  private _args: string;

  constructor(config: any) {
    this._container = config.container;
    this._templateUrl = config.templateUrl;
    this._serviceUrl = config._serviceUrl;
    this._args = config._args;
  }

  private _loadJson(url: string, args: any, cb: cb, errorCb: cb) {
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      data: args,
      success: (json) => {
        cb(json);
      },
      error: (e) => {
        errorCb(e);
      }
    });
  }

  private _loadHbs(url: string, cb: cb, errorCb: cb){
    $.ajax({
      url: url,
      type: "GET",
      dataType: "text",
      success: (hbs) => {
        cb(hbs);
      },
      error: (e) => {
        errorCb(e);
      }
    });
  }
  private _compileHbs(hbs: string, cb: cb, errorCb : cb) {
    try
    {
      var template = Handlebars.compile(hbs);
      cb(template);
    }
    catch(e) {
      errorCb(e);
    }
  }
  private _jsonToHtml(template: any, json: any, cb: cb, errorCb: cb) {
    try {
      var html = template(json);
      cb(html);
    } catch (e) {
      errorCb(e);
    }
  }
  private _appendHtml = function(html: string, cb: cb, errorCb: cb) {
    try {
      if ($(this._container).length==0) {
        throw new Error("Container not found!");
      }
      $(this._container).html(html);
      cb($(this._container));
    } catch(e) {
      errorCb(e);
    }
  }

  public render (cb: cb, errorCb : cb) {
    try
    {
      this._loadJson(this._serviceUrl, this._args, (json) => {
        this._loadHbs(this._templateUrl, (hbs) => {
          this._compileHbs(hbs, (template) => {
            this._jsonToHtml(template, json, (html) => {
              this._appendHtml(template, cb, errorCb);
            }, errorCb);
          }, errorCb);
        }, errorCb);
      }, errorCb);
    }
    catch(e)
    {
      errorCb(e);
    }
  }
}
