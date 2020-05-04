//  Funcion tipi IFI
 const comprarBoleto = (function(){
    //  Privado
    let evento ='Conferencia JS 2020';
    let precio = 200;
    const adquirirBoleto = ()=>{
        const elemento = document.createElement('p');
        elemento.textContent= `Comprando boleto para ${evento}`;
        const resultado = document.getElementById('app');
        resultado.appendChild(elemento);
    }
    
    const boletoTicket = ()=>{
      const divElemento = document.createElement('div');
      divElemento.innerHTML = `
                    <h2>compra Exitosa</h2>
                    <ul>
                        <li>Compra éxitosa al evento : ${evento}</li>
                        <li>Precio: $ ${precio}</li>
                    </ul>
      
      `;

     const resultado = document.getElementById('ticket');
     resultado.appendChild(divElemento)
    }

    const newElement = ()=>{
        const div = document.createElement('div');
        div.innerHTML = `<h1>Prueba exitosa</h1>
            <p>Boleto de <strong>${precio}</strong>ss</p>
            <p>Bienvenido al evento ${evento}</p>
        `;
        document.body.appendChild(div)
    }



    // Público

    return{
        mostrarBoleto: function(){
            adquirirBoleto();
            boletoTicket();
        },
        precioBoleto: function(){
            newElement()
          
        }
    }


 })();


comprarBoleto.mostrarBoleto();
comprarBoleto.precioBoleto();