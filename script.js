$(document).ready(function(){
    $(window).scroll(function(){        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.go-top').addClass("show");
        }else{
            $('.go-top').removeClass("show");
        }
    });

    $('.go-top').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('#nav .navlist li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.smallScreen').click(function(){
        $('#nav #navlist').toggleClass("active");
        $('.smallScreen i').toggleClass("active");
    });

});

// Smooth scroll
var navbar = document.querySelectorAll('#nav #navlist a');

for(var i=0;i<navbar.length;i++)
{
    navbar[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetId = this.textContent.trim().split(' ')[0].toLowerCase();
        var target = document.getElementById(targetId);
        var interval = setInterval(function(){
            var cordinates = target.getBoundingClientRect();
            if(cordinates.top <= 120)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,20);
        },10);
    });
}

// Fire Animation on skill

var progress = document.querySelectorAll('.sk-pro > div');
var skillSect = document.getElementById('sk-sect');
window.addEventListener("scroll",checkScroll);
var animate = false;

function IntialBar(){
    for(let bar of progress)
    {
        bar.style.width = 0 + '%';
    }
}

IntialBar();

function fillBar(){
    for(let bar of progress)
    {
        let targetW = bar.getAttribute('data-bar');
        let curW = 0;
        let interval = setInterval(function(){
            if(curW > targetW)
            {
                clearInterval(interval);
                return;
            }
            curW++;
            bar.style.width = curW + '%';
        }, 10);
    }
}

function checkScroll(){
    var cordinates = skillSect.getBoundingClientRect();

    if(!animate && cordinates.top < window.innerHeight)
    {
        animate = true;
        fillBar();
    }
    else if(cordinates.top > window.innerHeight)
    {
        animate = false;
        IntialBar();
    }
}