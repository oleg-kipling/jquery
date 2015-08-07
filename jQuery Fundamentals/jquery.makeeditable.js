/*global jQuery */

(function ($) {
    'use strict';
    
    var defaults = {
        clearText: false
    };

    $.fn.makeEditable = function (enableEditing, userOptions) {
        
        var options = $.extend({}, defaults, userOptions);
        
        return this.each(function () {
            var currentElement = $(this);
            
            if (enableEditing) {
                
                currentElement.on({
                    'click.makeeditable': function () {
                        if (options.clearText) {
                            currentElement.attr('data-defaultText', currentElement.text()).text('');
                        }
                    },
                    'blur.makeeditable': function () {
                        if (options.clearText && !currentElement.text().length) {
                            currentElement.text(currentElement.attr('data-defaultText'));
                        }
                    }
                });
                
                currentElement.attr('contenteditable', true);
            } else {
                currentElement.removeAttr('contenteditable').off('click.makeeditable blur.makeeditable');
            }
        });
    };
}(jQuery));