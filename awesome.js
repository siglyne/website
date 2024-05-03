 //<![CDATA[ 
jQuery(window).load(function(){
jQuery(document).ready(function () {

    jQuery('#contact-form').validate({
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                
                required: true,
                email: true,
                minlength:5,
                maxlength:30
            },
            zip: {
                  required: true,
                  digits: true,
                  minlength: 6,
                  maxlength: 6
                 } ,
            message: {
                minlength: 2,
                maxlength: 70,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');
        }
    });

});
});
//]]>  




