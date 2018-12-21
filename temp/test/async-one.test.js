class ViewAsync {
    constructor(config) {
        this._appendHtml = function (html, cb, errorCb) {
            try {
                if ($(this._container).length == 0) {
                    throw new Error("Container not found!");
                }
                $(this._container).html(html);
                cb($(this._container));
            }
            catch (e) {
                errorCb(e);
            }
        };
        this._container = config.container;
        this._templateUrl = config.templateUrl;
        this._serviceUrl = config._serviceUrl;
        this._args = config._args;
    }
    _loadJson(url, args, cb, errorCb) {
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
    _loadHbs(url, cb, errorCb) {
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
    _compileHbs(hbs, cb, errorCb) {
        try {
            var template = Handlebars.compile(hbs);
            cb(template);
        }
        catch (e) {
            errorCb(e);
        }
    }
    _jsonToHtml(template, json, cb, errorCb) {
        try {
            var html = template(json);
            cb(html);
        }
        catch (e) {
            errorCb(e);
        }
    }
    render(cb, errorCb) {
        try {
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
        catch (e) {
            errorCb(e);
        }
    }
}
