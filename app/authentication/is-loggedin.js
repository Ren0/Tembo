System.register([], function(exports_1) {
    function isLoggedin() {
        return !!localStorage.getItem('token');
    }
    exports_1("isLoggedin", isLoggedin);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=is-loggedin.js.map