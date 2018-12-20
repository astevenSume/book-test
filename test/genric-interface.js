var User = (function () {
    function User() {
    }
    User.prototype.valids = function () {
        return false;
    };
    return User;
}());
var Talk = (function () {
    function Talk() {
    }
    Talk.prototype.valids = function () {
        return true;
    };
    return Talk;
}());
var GenericRepository = (function () {
    function GenericRepository(url) {
        this._url = url;
    }
    GenericRepository.prototype.getAsync = function () {
        var _this = this;
        return Q.Promise(function (resolve, reject) {
            $.ajax({
                url: _this._url,
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log("aaa");
                    var items = data.items;
                    for (var i = 0; i < items.length; i++) {
                        var res = items[i].valids();
                        if (res) {
                            console.log('valide is true');
                        }
                        else {
                            console.log('valide is false');
                        }
                    }
                    console.log('_url = ' + _this._url);
                    resolve(items);
                },
                error: function (e) {
                    reject(e);
                }
            });
        });
    };
    return GenericRepository;
}());
var genericRepo = new GenericRepository('http://localhost:4000/users/genericUser');
genericRepo.getAsync().then(function (users) {
    users.forEach(function (user) {
        console.log(user.name);
    });
});
