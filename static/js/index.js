function goHome(){
    let title = document.getElementById('title')
    let subtitle = document.getElementById('subtitle')

    title.innerText = 'Sacale partido a tu canal de Telegram'
    subtitle.innerText = 'Crea los anuncios con solo enviar un link'

    let content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild(htmlToElement(`<div id="home-section" class="columns is-mobile is-centered">
                                          <div class="column">
                                          </div>
                                          <div class="column is-half">
                                            <figure class="image">
                                              <img src="./static/img/xbot_usage.jpg">
                                            </figure>
                                          </div>
                                          <div class="column">

                                          </div>
                                        </div>`))
                                    }




function goOffers(){

    let title = document.getElementById('title')
    let subtitle = document.getElementById('subtitle')

    title.innerText = 'Ofertas de XBot'
    subtitle.innerText = 'Listado de ofertas actuales interesantes'


    let content = document.getElementById('content')
    content.innerHTML = ''
    content.appendChild(htmlToElement(`<div id="offers-section" class="columns is-multiline is-mobile is-centered"></div>`))

    loadProducts()
}



function loadProducts(){
    fetch('https://tg-xbot-api.herokuapp.com/api/products?limit=80&origin=RNogales')
    .then(response => response.json())
    .then(products => {
        let products_panel = document.getElementById('offers-section');
        for (product of products){
            p = new Product(product)
            //console.log(p.shortDescription)
            products_panel.appendChild(p.toElement())
        }
    })
    .catch(error => console.log('Error' + error))
}



