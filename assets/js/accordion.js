
    $(document).ready(function() {
        $('.accordion-header').click(function() {
            
            $(this).toggleClass('active');
            
            var content = $(this).next('.accordion-content');
            
            if ($(this).hasClass('active')) {
                content.css('max-height', content.prop('scrollHeight') + "px");
            } else {
                content.css('max-height', 0);
            }
        });
    });

    $(document).ready(function() {
        $('.accordion-a-header').click(function() {
            
            $(this).toggleClass('active');
            
            var content = $(this).next('.accordion-a-content');
            
            if ($(this).hasClass('active')) {
                content.css('max-height', content.prop('scrollHeight') + "px");
            } else {
                content.css('max-height', 0);
            }
        });
    });
