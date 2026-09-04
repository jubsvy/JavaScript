function exemplo() {
    console,log(x);


    
    var x = 10;
    if (true) {
        var x = 20;  // mesma variavel x é redeclarada dentro do bloco
        console.log(x); // 20
    }
    console.log(x); // 20 (o valor foi alterado)
}

exemploVar();