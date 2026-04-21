function openTab(evt, tabName) {
    var i, tabContent, tabLinks;

    // Hide all tab-content elements
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
    }

    // Deactivate all tab-links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Show the specific tab and add "active" to the button
    document.getElementById(tabName).classList.add("show");
    evt.currentTarget.classList.add("active");
}