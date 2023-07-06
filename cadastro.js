
class Card{

    constructor(){
        
        this.arrayCards = []
    }

    salvarBrunch(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto)
        }
        
        this.listaBrunch()
    }
    salvarBebida(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto)
        }
        
        this.listaBebidas()
    }
    listaBrunch(){
        let divCadastro = document.querySelector('#brunchCadastro')
        divCadastro.innerText = ''
        for(let i = 0; i<this.arrayCards.length; i++){
            
            divCadastro.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCards[i].name}</h3>
                        <p>${this.arrayCards[i].price}</p>
                    </div> 
                    <p>${this.arrayCards[i].description}</p>
            </div>
            `     
            }
    }
    listaBebidas(){
        
        let divCadastro = document.querySelector('#bebidas')
        divCadastro.innerText = ''
        for(let i = 0; i<this.arrayCards.length; i++){
            divCadastro.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCards[i].name}</h3>
                        <p>${this.arrayCards[i].price}</p>
                    </div> 
                    <p>${this.arrayCards[i].description}</p>
            </div>
            `   
            }
    }
    adicionar(produto){
        this.arrayCards.push(produto)
        
    }

    lerDados(){
        let produto = {}
        produto.name  = document.getElementById("name").value
        produto.price = document.getElementById("price").value
        produto.description = document.getElementById("desc").value


        return produto
    }
    validaCampos(produto){
        let msg = ''
    
        if(produto.name == ''){
            msg += 'Informe o nome do card \n'
        }
        if(produto.price == ""){
            msg += 'Informe o preço do card \n'
        }   
        if(produto.description == ""){
            msg += 'Informe a descrição do card \n'
        } 
        if(msg != ''){
            alert(msg)
            return false
        }
        
        return true
    }
}


let card = new Card()

