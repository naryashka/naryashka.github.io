$(function(){

    $('.arrow').myCarousel();
})

$(function(){

    var html = $('#user_tmpl').html();
    var paragraphs = [
    {
        title:'Malook Anastasiia',
        url: 'img/3.jpg',
        diploma: 'Master of information technology',
        question: 'I want to learn Frontend because: ',
        reason1: 'I have the diploma, but I have not a profession',
        reason2: 'I want to work with smart people',
        reason3: 'I want to raise in IT',
        phone: 'My phone number 050 808 11 63',
        vk: 'My vk profile: ',
        href: 'https://vk.com/id10680635',
        feedback: 'If you want I can be your fitness trainer'
    }
    ];

    var content = tmpl(html, {
        data: paragraphs
    })

    $('body').append(content);
})