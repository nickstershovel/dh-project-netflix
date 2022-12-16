function openAnswer(number){
    let element = document.getElementById('answer-'+number);
    let svg = document.getElementById('thin-x '+number);
    let items = document.querySelectorAll('.faq-answer');
    let itemsSvg = document.querySelectorAll('.svg-icon-thin-x');

    this.checkClass(items,element);
    this.checkClass(itemsSvg,svg);

    return;
}

function checkClass(items,element){
    items.forEach(e => {
        e == element ? 
            element.classList.toggle('open'): 
            e.classList.remove('open');
    });
    return;
}