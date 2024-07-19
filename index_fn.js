$(document).ready(function() {
    let currentPart = 'menu';
    let isMenuVisible = false;

    $(".part-ui a").on("click", function() {
        var clss = $(this).attr("class");
        if (currentPart === clss && isMenuVisible) {
            $("#part-container-" + clss).hide();
            isMenuVisible = false;
        } else {
            $("#part-container-" + clss).show().find("ol." + clss).show();
            currentPart = clss;
            isMenuVisible = true;
        }
    });
});