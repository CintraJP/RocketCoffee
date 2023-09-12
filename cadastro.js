
class Card{

    constructor(){
        
        this.arrayCardsBebidas = []
        this.arrayCardsBrunchs = []
        
    }

    salvarBrunch(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto, false)
            
        }
        
        this.listaBrunch()
        for(let i = 0; i<this.arrayCardsBrunchs.length; i++){
            this.arrayCardsBrunchs[i].id = i
        }

        
        
    }
    salvarBebida(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto, true)
            
            
        }
        
        this.listaBebidas()
        for(let i = 0; i<this.arrayCardsBebidas.length; i++){
            this.arrayCardsBebidas[i].id = i
        }
        console.log(this.arrayCardsBebidas)
        
        
    }
    listaBrunch(){
        let divCadastroBrunch = document.querySelector('#brunchCadastro')
        divCadastroBrunch.innerHTML = ''
        for(let i = 0; i<this.arrayCardsBrunchs.length; i++){
            
            divCadastroBrunch.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCardsBrunchs[i].name}</h3>
                        <p>${this.arrayCardsBrunchs[i].price}</p>
                    </div> 
                    <p>${this.arrayCardsBrunchs[i].description}</p>
                    <button onclick="card.deletar(${this.arrayCardsBrunchs[i].id}, true)" class="btnRemove">Excluir</button>
            </div>
            `
            }
            
    }
    listaBebidas(){
        
        let divCadastroBebidas = document.querySelector('#bebidas')
        divCadastroBebidas.innerHTML = ''
        for(let i = 0; i<this.arrayCardsBebidas.length; i++){
            divCadastroBebidas.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCardsBebidas[i].name}</h3>
                        <p>${this.arrayCardsBebidas[i].price}</p>
                    </div> 
                    <p>${this.arrayCardsBebidas[i].description}</p>
                    <button class="btnRemove" onclick="card.deletar(${this.arrayCardsBebidas[i].id}, false)">Excluir</button>
            </div>
            ` 
            }
    }
    adicionar(produto, brunchOrBebida){
        if(brunchOrBebida){
            this.arrayCardsBebidas.push(produto)
        }
        else{
            this.arrayCardsBrunchs.push(produto)
        }
        
    }

    lerDados(){
        let produto = {}
        
        produto.name  = document.getElementById("name").value
        produto.price = document.getElementById("price").value
        produto.description = document.getElementById("desc").value
        produto.id = 0

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
    deletar(id, bebidaOrBrunch){
        if(bebidaOrBrunch == true){
            for(let i = 0; i<this.arrayCardsBrunchs.length; i++){
                if(this.arrayCardsBrunchs[i].id == id){
                    this.arrayCardsBrunchs.splice(i, 1)
                }
                this.listaBrunch()
            }
        }
        if(bebidaOrBrunch == false){
            for(let i = 0; i<this.arrayCardsBebidas.length; i++){
                if(this.arrayCardsBebidas[i].id == id){
                    this.arrayCardsBebidas.splice(i, 1) 
                }
                    
                this.listaBebidas()
            }
        }
    }
    
} 
let card = new Card()



