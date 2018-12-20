var app;
(function (app) {
    var validation;
    (function (validation) {
        var UserValidator = (function () {
            function UserValidator() {
            }
            return UserValidator;
        }());
        validation.UserValidator = UserValidator;
        var TalkValidator = (function () {
            function TalkValidator() {
            }
            return TalkValidator;
        }());
        validation.TalkValidator = TalkValidator;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
var user = new app.models.UserModel();
