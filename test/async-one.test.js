var ViewAsync = /** @class */ (function () {
    function ViewAsync(config) {
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
    ViewAsync.prototype._loadJson = function (url, args, cb, errorCb) {
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            data: args,
            success: function (json) {
                cb(json);
            },
            error: function (e) {
                errorCb(e);
            }
        });
    };
    ViewAsync.prototype._loadHbs = function (url, cb, errorCb) {
        $.ajax({
            url: url,
            type: "GET",
            dataType: "text",
            success: function (hbs) {
                cb(hbs);
            },
            error: function (e) {
                errorCb(e);
            }
        });
    };
    ViewAsync.prototype._compileHbs = function (hbs, cb, errorCb) {
        try {
            var template = Handlebars.compile(hbs);
            cb(template);
        }
        catch (e) {
            errorCb(e);
        }
    };
    ViewAsync.prototype._jsonToHtml = function (template, json, cb, errorCb) {
        try {
            var html = template(json);
            cb(html);
        }
        catch (e) {
            errorCb(e);
        }
    };
    ViewAsync.prototype.render = function (cb, errorCb) {
        var _this = this;
        try {
            this._loadJson(this._serviceUrl, this._args, function (json) {
                _this._loadHbs(_this._templateUrl, function (hbs) {
                    _this._compileHbs(hbs, function (template) {
                        _this._jsonToHtml(template, json, function (html) {
                            _this._appendHtml(template, cb, errorCb);
                        }, errorCb);
                    }, errorCb);
                }, errorCb);
            }, errorCb);
        }
        catch (e) {
            errorCb(e);
        }
    };
    return ViewAsync;
}());
