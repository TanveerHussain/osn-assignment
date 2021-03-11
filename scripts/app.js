$('.riseInput input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('.riseInput input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});

$('.show-pass-btn').on('click',function(e) {
    $(this).text(($(this).text() === 'Hide' ? 'Show' : 'Hide'));
        var $pwd = $('#password');
        if ($pwd.attr('type') === 'password') {
            $pwd.attr('type', 'text');
        } else {
            $pwd.attr('type', 'password');
        }
    e.preventDefault();
});

$(function() {
  
  $("form[name='login']").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    
    messages: {
      password: {
        required: "Please provide a password"
      },
      email: "Email is insufficient format!"
    },
    errorElement : 'span',
    errorLabelContainer: '.error',
    
    submitHandler: function(form) {
        debugger
      form.submit();
    }
  });
});