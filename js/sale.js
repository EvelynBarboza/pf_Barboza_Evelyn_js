
/*let url;
const link = document.querySelector('.sale');
//console.log(link)

link.addEventListener('click', setURL);

function setURL(evt){
    evt.preventDefault();
    url = evt.target.dataset?.pagina
        if(url != undefined){
            pedirPagina(url + ".html");
        }else {
            pedirPagina('productos.html')
        }
    
    }
        //pedirPagina(url + ".html");
        //pedirPagina('productos.html');
    /*}else {
        pedirPagina('productos.html')

function pedirPagina(url){
    fetch('pages/productos.html')
        .then((res)=>{
            return res.text();
        })
        .then((pagina)=>{
          document.querySelector('#vacio').innerHTML = pagina;
        })
        .catch((err)=>{
            alert(err)
        })
}
document.addEventListener('DOMContentLoaded', setURL)*/