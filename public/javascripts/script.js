$(() => {

    const $a = $('div a').hover(function () {
        $(this).css({ 'text-decoration': 'underline' })

    }, function () {
        $(this).css({ 'text-decoration': 'none' })
    });


    const currentUrl = window.location.href;

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            link.classList.add('current');
        }
    });

    document.getElementById('deleteButton').addEventListener('click', function (event) {
        event.preventDefault();

        if (confirm('Are you sure you want to delete?')) {
            document.getElementById('deleteForm').submit();
        }
    })

});