function replacePopularPostTitle() {
    const parentNode = document.getElementById("PopularPosts1").getElementsByClassName("entry-title");

    for (let i in parentNode) {
        const node = parentNode[i].getElementsByTagName("a")[0];
        const title = node.innerHTML;
        const newTitle = title.replace("TOP 5 DATA ", "DATA ");
        node.innerHTML = newTitle;
    }
}