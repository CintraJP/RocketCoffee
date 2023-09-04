
class Card{

    constructor(){
        
        this.arrayCardsBebidas = []
        this.arrayCardsBrunchs = []
        this.idBebidas = 0
        this.idBrunchs = 0
    }

    salvarBrunch(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto, false)
            this.arrayCardsBrunchs.id++
        }
        
        this.listaBrunch()
        
        
    }
    salvarBebida(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto, true)
            this.arrayCardsBebidas.id++
            
        }
        
        this.listaBebidas()
        
        
    }
    listaBrunch(){
        let divCadastroBrunch = document.querySelector('#brunchCadastro')
        divCadastroBrunch.innerText = ''
        for(let i = 0; i<this.arrayCardsBrunchs.length; i++){
            
            divCadastroBrunch.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCardsBrunchs[i].name}</h3>
                        <p>${this.arrayCardsBrunchs[i].price}</p>
                    </div> 
                    <p>${this.arrayCardsBrunchs[i].description}</p>
                    <button class="btnRemove" onclick="card.deletar(${this.idBrunchs}, true)">Excluir</button>
            </div>
            `
                console.log(this.idBrunchs)
            }
            
    }
    listaBebidas(){
        
        let divCadastroBebidas = document.querySelector('#bebidas')
        divCadastroBebidas.innerText = ''
        for(let i = 0; i<this.arrayCardsBebidas.length; i++){
            divCadastroBebidas.innerHTML +=
            `
            <div class="card" id = "${this.idBebidas}">
                    <div class="card-header">
                        <h3>${this.arrayCardsBebidas[i].name}</h3>
                        <p>${this.arrayCardsBebidas[i].price}</p>
                    </div> 
                    <p>${this.arrayCardsBebidas[i].description}</p>
                    <button class="btnRemove" onclick="card.deletar(${this.idBebidas}, false)">Excluir</button>
            </div>
            ` 
            console.log(this.idBebidas)
            
            }
    }
    adicionar(produto, brunchOrBebida){
        if(brunchOrBebida){
            this.arrayCardsBebidas.push(produto)
            this.idBebidas++
        }
        else{
            this.arrayCardsBrunchs.push(produto)
            this.idBrunchs++
        }
        
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
    deletar(id, bebidaOrBrunch){
        if(bebidaOrBrunch == true){
            for(let i = 0; i<this.arrayCardsBrunchs.length; i++){
                if(this.arrayCardsBrunchs[i] = id){
                    this.arrayCardsBrunchs.splice(i, 1)
                }
            }
        }
        if(bebidaOrBrunch == false){
            for(let i = 0; i<this.arrayCardsBebidas.length; i++){
                if(this.arrayCardsBebidas[i] = id){
                    this.arrayCardsBebidas.splice(i, 1)
                    var removeDiv = document.getElementById(this.idBebidas)
                    console.log(removeDiv)
                    removeDiv.parentNode.removeChild(removeDiv)
                }
            }
        }
    }
    
}
let btnRemove 


let card = new Card()



