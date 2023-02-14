$(document).ready(function() {
    const hamburger = $(".hamburger");
    const navMenu = $(".nav-menu");
    const body = $("body");

    hamburger.click(function() {
        hamburger.toggleClass("active");
        navMenu.toggleClass("active");
        body.toggleClass("active");
    });

});