self.addEventListener("fetch", function (event) {
    event.respondWith(function() {
        return fetch("https://www.whoishostingthis.com/tools/user-agent/")
            .then(function (response) {
                return response;
            });
    }());
});