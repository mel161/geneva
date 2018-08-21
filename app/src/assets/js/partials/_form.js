function validateForms() {
  $('.form').each(function() {
    $(this).validate({
      errorClass: 'input__error',
      errorElement: 'span',
      messages: {
        phone: {
          checkMask: "Неверный формат номера"
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('input--valid').addClass('input--error');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('input--error').addClass('input--valid');
      }
    });
  });
}

jQuery(document).ready(function() {
  validateForms();

  jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
  });

  jQuery.validator.setDefaults({
    debug: true
  });

  jQuery.extend(jQuery.validator.messages, {
    required: "Поле должно быть заполнено."
  });

  $('input').focus(function() {
    $(this).parents('.form__block').addClass('focused');
  });

  $('input').blur(function() {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass('filled');
      $(this).parents('.form__block').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });

  // $('.input__field--phone').mask("+7(999)999-99-99");
});
