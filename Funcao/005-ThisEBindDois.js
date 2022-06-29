// pode ser feito deessa forma 

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000)
}

// e pode ser feito dessa forma

function Pessoa(){
    this.idade = 0

    const self = this /* Significa que nessa linha é o objeto que eu quero realmente apontar */
    setInterval(function(){
        self.idade ++
        console.log(self.idade)
    }, 1000)
}

new Pessoa