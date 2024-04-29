var bt = document.querySelector('#bt');
bt.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<div>123465</div>');
});
