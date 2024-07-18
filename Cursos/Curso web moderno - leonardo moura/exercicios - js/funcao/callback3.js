// Exemplo de callback no brower, não funciona no node
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}