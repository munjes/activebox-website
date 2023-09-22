$(function(){
    $('.back_to_top').click (function () {
        $('html, body').animate({scrollTop:0},1000)
    })

    $(window).scroll(function(){
        var scrollTop = $ (this).scrollTop();
    if(scrollTop > 400) {
        $('.navbar').addClass('bg_color1')
    } else {
        $('.navbar').removeClass('bg_color1')
    }
    if(scrollTop > 700){
        $('.back_to_top').show(500)
    }else {
        $('.back_to_top').hide(500)
    }
    })
})


new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

(() => {
    // Specify the deadline date
    const deadlineDate = new Date('December 30, 2023 09:00:00').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();