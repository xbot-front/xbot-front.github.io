
class Product {
    constructor(obj){
        this.shortDescription = obj.shortDescription;
        this.description = obj.description;
        this.features = obj.features;
        this.standardPrice = obj.standardPrice;
        this.price = obj.price;
        this.size = obj.size;
        this.url = obj.url;
        this.imageUrl = obj.imageUrl;
    }

    toHTML(){
    /*
        let prices_html =  `<div class="tags">
                  <span class="tag is-danger is-medium">Antes: ${this.standardPrice}</span>
                  <span class="tag is-success is-medium">Ahora: ${this.price}</span>
                </div>`

        if (this.standardPrice == null){
            prices_html =  `<div class="tags">
                      <span class="tag is-success is-medium">Ahora: ${this.price}</span>
                    </div>`
        }
    */


        return `<div class="column is-narrow">
                <article class="card" style="width: 340px">
                    <header class="card-header">
                        <p class="card-header-title">
                            <a title="Ver en Amazon" href=${this.url}>${this.shortDescription}</a>
                        </p>
                    </header>
                    <div class="card-image">
                        <figure class="image">
                            <img src="${this.imageUrl}" alt="${this.description + this.features}">
                        </figure>
                    </div>
                    <footer class="card-footer">
                        <div name="rater"></div>
                    </footer>
                </article>
            </div>`
    }
    toElement(){
        return htmlToElement(this.toHTML())
    }
}