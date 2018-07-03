self.addEventListener("fetch", function (event) {
    event.respondWith(function() {
        return fetch("http://gs.statcounter.com/detect")
            .then(function (response) {
                return response;
            });
    }());
});