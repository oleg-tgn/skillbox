window.addEventListener('DOMContentLoaded', function() {
    console.log(document.querySelectorAll('.text'));
    //document.querySelector('.text').style.color = 'blue';
    //document.querySelector('.text').style.backgroundColor= 'red';

    //document.querySelector('#text').classList.add('alert')

    document.querySelectorAll('.text').forEach(function(domElement) {
        domElement.classList.add('alert');
    });

    //console.log(document.getElementById('text'));
    //console.log(document.getElementsByTagName('p'));
    //console.log(document.querySelectorAll('p'));
});
    