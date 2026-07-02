(function () {
    var el = document.getElementById('js-data');
    if (!el) return;

    var mode = el.getAttribute('data-mode');

    if (mode === 'auto-redirect') {
        var url = el.getAttribute('data-telegram-url');
        if (url) {
            setTimeout(function () {
                window.location.href = url;
            }, 2500);
        }
    }

    if (mode === 'poll-status') {
        setInterval(function () {
            fetch(window.location.pathname)
                .then(function (r) { return r.text(); })
                .then(function (html) {
                    if (html.indexOf('redirect-screen') !== -1) {
                        window.location.reload();
                    }
                })
                .catch(function () {});
        }, 15000);
    }
}());
