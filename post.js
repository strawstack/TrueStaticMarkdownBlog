function post(markdownStrs) {
    const converter = new showdown.Converter();
    document.body.innerHTML = converter.makeHtml(markdownStrs.join(""));
}