self.addEventListener("fetch", function (event) {
    event.respondWith(function() {
        return fetch(event.request)
            .then(function (response) {
                return response;
            });
    }());
});