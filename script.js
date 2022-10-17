function add_like(name) {
    alert('Ninja: '+ name+ ' was liked');
}

function remove_btn_add() {
    let btn = document.getElementById('btn_add_definition');
    btn.parentNode.removeChild(btn);
}

function chanche_login() {
    document.getElementById("btn_login").childNodes[0].nodeValue = "Logout";
}