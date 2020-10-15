(function($) {
    $(function() {
      
      $('ul.project__tabs').on('click', 'li:not(.project__tab_active)', function() {
        $(this)
          .addClass('project__tab_active').siblings().removeClass('project__tab_active')
          .closest('div.project__view').find('div.project__content').removeClass('project__content_active').eq($(this).index()).addClass('project__content_active');
      });
      
    });
    })(jQuery);