/* Navigation Screen */
$(function () {
    $('.menubar').on('click', function () {
        gsap.to('#nav-content', .6, { y: 0 });
    })
    $('.nav-close').on('click', function () {
        gsap.to('#nav-content', .6, { y: "-100%" });
    });
});
$(function () {
    var body = document.querySelector('body');
    var $cursor = $('.cursor')
    function cursormover(e) {

        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
            stagger: .002
        })
    }
    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.4,
            opacity: 1
        })

    }
    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: .6
        })
    }
    $(window).on('mousemove', cursormover);
    $('.menubar').hover(cursorhover, cursor);
    $('a').hover(cursorhover, cursor);
    $('.nav-close').hover(cursorhover, cursor);

})


















/* Directory Page */
$(function () {

    $('#resume-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
    $('#about-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "none" });
        gsap.to('#about', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
    $('#contact-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
    $('#portfolio-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
    $('#blog-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
    $('#home-link').on('click', function () {
        gsap.to('#nav-content', 0, { display: "none", delay: .7 });
        gsap.to('#nav-content', 0, { y: '-100%', delay: .7 });
        gsap.to('#header', 0, { display: "none" });
        gsap.to('#resume', 0, { display: "none" });
        gsap.to('#portfolio', 0, { display: "none" });
        gsap.to('#contact', 0, { display: "none" });
        gsap.to('#about', 0, { display: "none" });
        gsap.to('#blog', 0, { display: "none" });
        gsap.to('#breaker', 0, { display: "block" });
        gsap.to('#breaker-two', 0, { display: "block", delay: .1 });
        gsap.to('#breaker', 0, { display: "none", delay: 2 });
        gsap.to('#breaker-two', 0, { display: "none", delay: 2 });
        gsap.to('#header', 0, { display: "block", delay: .7 });
        gsap.to('#nav-content', 0, { display: 'flex', delay: 2 });
    })
})















/* Home Page - Rotate Text */
$(function () {
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 5) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 100 - Math.random() * 50;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 50;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
        document.body.appendChild(css);
    };
})





















/* Resume Page - Resume PDF Pop-up */
const popupBtn = document.getElementById('seeresume');
const popupContainer = document.getElementById('popupresume');
const pdfViewer = document.getElementById('pdfViewer');

popupBtn.addEventListener('click', () => {
    pdfViewer.src = "image/resume.pdf";
    popupContainer.classList.add('show');
});
function closePopup() {
    pdfViewer.src = '';
    popupContainer.classList.remove('show');
}














/* Blog Page - Each blog article */
document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('iframe-blog1');
    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement === iframe) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            iframe.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    document.querySelector('.blog1').addEventListener('click', toggleFullscreen);
});

document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('iframe-blog2');
    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement === iframe) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            iframe.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    document.querySelector('.blog2').addEventListener('click', toggleFullscreen);
});

document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('iframe-blog3');
    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement === iframe) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            iframe.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    document.querySelector('.blog3').addEventListener('click', toggleFullscreen);
});

document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('iframe-blog4');
    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement === iframe) {
            iframe.style.display = 'block';
        } else {
            iframe.style.display = 'none';
        }
    });
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            iframe.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    document.querySelector('.blog4').addEventListener('click', toggleFullscreen);
});


















/* Vertical Nav Bar in About Page */
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('#about-nav a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var topOffset = targetElement.offsetTop;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
});




















/* "Your message has been sent!" Pop-up */
document.getElementById('submit').addEventListener('click', function () {
    var popupText = document.getElementById('popupText');
    popupText.style.display = 'block';
    setTimeout(function () {
        popupText.style.opacity = '1';
    }, 10);
    setTimeout(function () {
        popupText.style.opacity = '0';
        setTimeout(function () {
            popupText.style.display = 'none';
        }, 1000);
    }, 2000);
});
