export function reCaptchaOnFocus() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LczXzgeAAAAANJ-LyxE2pZb-73d-OY2XSMNtYfc';
    head.appendChild(script);
    // remove focus to avoid js error:
    document.getElementById('contactForm').removeEventListener('click', reCaptchaOnFocus);
    Array.from(document.getElementsByClassName('contactBtn')).forEach(btn => {
        btn.removeEventListener('click', reCaptchaOnFocus);
    });
};