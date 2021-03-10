$('.play-btn button').on('click', function () {
    $('.start-page .content .progress-container').show();
    setTimeout(() => {
        $('.start-page').fadeOut();
        $('.login-page').fadeIn();
    }, 5100);
});

// login 
var valid = true;
var username = $('input.username').val(),
    password = $('input.password').val();

function login() {
    username = $('input.username').val();
    password = $('input.password').val();
    valid = true;
    console.log('clicked');
    $('.invalid-feedback').remove();
    if (username == null || username == "" || username == undefined) {
        valid = false;
        $('input.username').closest('.form-group').append('<div style="display:block;" class="invalid-feedback">*Username is required.</div>');
        $('input.username').focus();
    }
    if (password == null || password == "" || password == undefined) {
        valid = false;
        $('input.password').closest('.form-group').append('<div style="display:block;" class="invalid-feedback">*Password is required.</div>');
        !username ? $('input.username').focus() : $('input.password').focus();
    }
    if (valid) {
        console.log('login success');
        window.location.href = "index.html";
    }
} 