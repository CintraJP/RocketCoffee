
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
        
        
    }
    salvarBebida(){
        let produto = this.lerDados()
        if(this.validaCampos(produto)){
            this.adicionar(produto, true)
            
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
                    <button class="btnRemove">Excluir</button>
            </div>
            ` 
            btnRemove = document.querySelector(".btnRemove")
            btnRemove.setAttribute("onclick","card.deletar()")
            this.arrayCardsBrunchs.id = [i]    
            }
            
    }
    listaBebidas(){
        
        let divCadastroBebidas = document.querySelector('#bebidas')
        divCadastroBebidas.innerText = ''
        for(let i = 0; i<this.arrayCardsBebidas.length; i++){
            divCadastroBebidas.innerHTML +=
            `
            <div class="card">
                    <div class="card-header">
                        <h3>${this.arrayCardsBebidas[i].name}</h3>
                        <p>${this.arrayCardsBebidas[i].price}</p>
                    </div> 
                    <p>${this.arrayCardsBebidas[i].description}</p>
            </div>
            `   
            this.arrayCardsBebidas.id = [i]
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
    deletar(){
        alert("deletar")
    }
    
}
let btnRemove 


let card = new Card()



