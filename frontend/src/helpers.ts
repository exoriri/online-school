export function reCaptchaOnFocus() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js?render=6Ldp-yseAAAAALozzoVycH0j07AwW2b61MdN9n1E';
    head.appendChild(script);
    // remove focus to avoid js error:
    document.getElementById('contactForm').removeEventListener('click', reCaptchaOnFocus);
    document.getElementById('modalForm') && document.getElementById('modalForm').removeEventListener('click', reCaptchaOnFocus);
};