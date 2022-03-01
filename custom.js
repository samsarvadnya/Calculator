function valueButton(e){
    main.display.value += e.value ;
}
function Clear() {
    main.display.value = null;
}
function Calculate(){
    main.display.value = eval(main.display.value)
}