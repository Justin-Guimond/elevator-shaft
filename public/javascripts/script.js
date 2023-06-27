$(() => {

    const $a = $('div a').hover(function (){  
        $(this).css({'text-decoration':'underline'})
        
        }, function() {
            $(this).css({'text-decoration':'none'})
        });


    const currentUrl = window.location.href;

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('current');
        }
    });

    // function confirmDelete() {
    //     const result = confirm('Are you sure you want to delete?')

    //     if (result) {
    //             Sessions.findByIdAndRemove(req.params.id);
    //             res.redirect('/');   
    //     } else {
    //         res.redirect('/');
    //     };
    // };
});