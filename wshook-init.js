window.wsHook.after = function(messageEvent, url, wsObject) {
    var bodyStart = messageEvent.data.search('<body>');
    var bodyEnd = messageEvent.data.search('</body>');

    if (bodyStart > -1 && bodyEnd > -1) {
        let message = messageEvent.data.slice(bodyStart + 6, bodyEnd);
        console.log(message);
    }

    return messageEvent;
}

window.wsHook.after = function(messageEvent, url, wsObject) {
    wsObject.send("Intercepted and sent again")
    return null;
}
