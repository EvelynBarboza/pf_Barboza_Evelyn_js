
let url;
const link = document.querySelector('.sale');
//console.log(link)

link.addEventListener('click', setURL);

function setURL(evt){
    evt.preventDefault();
    url = evt.target.dataset?.pagina
    if(url != undefined){
        pedirPagina(url + ".html");
        //pedirPagina('productos.html');
    /*}else {
        pedirPagina('productos.html')*/
    }
}

function pedirPagina(url){
    fetch(url)
        .then((res)=>{
            return res.text();
        })
        .then((pagina)=>{
           document.querySelector('#vacio').innerHTML = pagina;
        })
        .catch((err)=>{
        })
}

document.addEventListener('DOMContentLoaded', setURL)

//console.log(links)

/*for(let link of links){
    link.addEventListener('click', setURL)
}

function setURL(evt){
    evt.preventDefault();
    //console.log("click");
    //console.log(evt.target.dataset.pagina);
    url = evt.target.dataset?.pagina
    if(url != undefined){
        pedirPagina(url + ".html");
    }else {
        pedirPagina('inicio.html')
    }

}

function pedirPagina(url){
    //console.log(url);
    fetch(url)
        .then((res)=>{
            return res.text();
        })
        .then((pagina)=>{
            //console.log(pagina)
            document.querySelector('main').innerHTML = pagina;
        })
        .catch((err)=>{
            alert(err)
        })
}


document.addEventListener('DOMContentLoaded', setURL)*/
