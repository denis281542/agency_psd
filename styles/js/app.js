$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight();
        scrollOffset = $(window).scrollTop();

    
        /* Collapse */
        $("[data-collapse]").on("click", function(event) {
            event.preventDefault();

            let $this = $(this),
                blockId = $this.data("collapse");
            
            $this.toggleClass("active");    
        });

});