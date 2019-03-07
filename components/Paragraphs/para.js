

TweenMax.staggerTo(".anim", 2.5, {rotation:1080, y:0}, 1);
TweenLite.to(".anim", 2.5, { ease: Bounce.easeOut, y: 500, onComplete:tweenComplete});

function tweenComplete() {
    TweenLite.to(".anim", 2.5, { ease: Bounce.easeOut, y: 0 });
    console.log('hi')
}


TweenMax.staggerTo(".anim2", 2.5, {rotation:-720, y:0}, 1);
TweenLite.to(".anim2", 2.5, { ease: Bounce.easeOut, y: -250, onComplete:tweenComplete1});

function tweenComplete1() {
    TweenLite.to(".anim2", 2.5, { ease: Bounce.easeOut, y: 0 });
    console.log('hi')
}