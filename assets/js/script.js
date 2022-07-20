


let perguntas = [
    {
        titulo: "assets/img/caturra.jpg",
        alternativas: ['Banana-da-Terra','Banana-Grande','Banana-Caturra','Banana-Prata'],
        correta: 2
    },
    {
        titulo:"assets/img/maçã.jpg" ,
        alternativas: ['Banana-Caturra','Banana-Maçã','Banana-Nanica','Banana-São-Tomé'],
        correta: 1
    },
    {
        titulo: "assets/img/prata.jpg",
        alternativas: ['Banana-Do-Céu','Banana-Do-Mato','Banana-da-Terra','Banana-Prata'],
        correta: 3
    }
    ,
    {
        titulo: "assets/img/sãotomé.jpg",
        alternativas: ['Banana-Salsicha','Banana-Vermelha','Banana-São-Tomé','Banana-da-Angola'],
        correta: 2
    
    },
    {
        titulo: "assets/img/Cavendish.jpg",
        alternativas: ['Banana-Cavendish','Banana-da-Angola','Banana-da-Terra','Banana-Nanica'],
        correta: 0
    
    },
    {
        titulo: "assets/img/Figo.jpg",
        alternativas: ['Banana-da-Angola','Banana-Caturra','Banana-da-Terra','Banana-Figo'],
        correta: 3
    
    },
    {
        titulo: "assets/img/Gros-Michel.jpg",
        alternativas: ['Banana-Cavendish','Banana-Branca','Banana-Gros-Michel','Banana-Inglesa'],
        correta: 2
    
    },
    {
        titulo:"assets/img/ouro.jpg",
        alternativas: ['Banana-Ouro','Banana-Nanica','Banana-De-Mel','Banana-Little'],
        correta: 0
    
    },
    {
        titulo: "assets/img/nanica.jpg",
        alternativas: ['Banana-Nanica','Banana-Figo','Banana-Da-Terra','Banana-Do-Ceu'],
        correta: 0
    
    },
    {
        titulo: "assets/img/vermelha.jpg",
        alternativas: ['Banana-da-Angola','Banana-Vermelha','Banana-Chinesa','Banana-De-Sangue'],
        correta: 1
    
    },
    ]
    
    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.option');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('title');
        titleDiv.src = q.titulo;
        // mostrando as alternativas
        let alts = document.querySelectorAll('.option');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
            this.Totalpontos = 0;
            alert('Fim de jogo!')
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta(true);
        }
        else{
            console.log("Errada")
            this.mostraresposta(false);
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('points');
        scoreDiv.textContent = `Sua pontuação: ${this.Totalpontos}`;
    },
    
    mostraresposta: function (correto) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // formate a mensagem a ser exibida
        if (correto) {
          result = 'Resposta Correta!';
        }
        else {
          result = 'Incorreto!';
        }
        resultDiv.textContent = result;
      }
    
    
    }
    
    app.start();



document.getElementById("btn-check").addEventListener('click', introduction)


function introduction(){
    
    let div = document.querySelector(".introduction")
    div.style.display = "none"
    
}