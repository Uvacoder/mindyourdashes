window.addEventListener('DOMContentLoaded', () => {
    const clipboard = new ClipboardJS('.card--hero-hover');

    clipboard.on('success', function(e) {
        e.trigger.classList.add('card--hero-hover--copied');
        e.trigger.firstElementChild.innerHTML = 'Copied!';
        setTimeout(() => {
            e.trigger.classList.remove('card--hero-hover--copied');
            e.trigger.firstElementChild.innerHTML = 'Copy';
        }, 1500);
    });
})