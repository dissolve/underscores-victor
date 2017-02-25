//Scroll
    $(document).ready(function () {
        $(document).on("scroll", onScroll);

        // $('a[href*="/underscores-victor/#"]').on('click', function (e) { 
        // $('a[href*="#"]').on('click', function (e) {        
        // $('a[href^="#"]').on('click', function (e) {
        // split_url_list = window.location.pathname.split('/')
        // filename = split_url_list[split_url_list.length - 1] 
        
        $('a[href*="'+window.location.pathname+'#"]').on('click', function(e) {
            e.preventDefault();
            $(document).off("scroll");

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target; 
                $(document).on("scroll", onScroll);
            });
        });
    });
 
    $(document).ready(function () {
        var location = window.location.href;
        $('.menu-item a').each(function(){
            if(location.indexOf(this.href)>-1) {         
               $(this).addClass('active');
            }
        });
    }); 

    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    var current_hash = window.location.hash
   
    $('.menu-item a').each(function () {
        var currLink = $(this);       
        var hash = currLink.attr("href").split('#')[1];
        if(hash){
            var refElement = $('#' + hash);

            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.menu-item a').removeClass("active");
                currLink.addClass("active");
                window.location.hash = '#' + hash
            }
            else {
                currLink.removeClass("active");
            }
        }
    });
    }









