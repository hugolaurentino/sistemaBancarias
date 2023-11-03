const contaBancaria = { //objeto
    nome: "Maria",
    saldo: 0,
    historicos: [], //array
    depositar: function (valor) { //método
        this.saldo += valor
        contaBancaria.historicos.push( //adicionar objeto
            {
                tipo: "Depósito",
                valor: valor,
            }
        )
        return `Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`
    },
    sacar: function (valor) {
        if (valor >= this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        } else {
            return this.saldo -= valor,
                contaBancaria.historicos.push(
                    {
                        tipo: "Saque",
                        valor: valor,
                    }
                ),
                `Saque de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}
Histórico:`)
        for (const histórico of contaBancaria.historicos) {
            return `${histórico.tipo} de R$ ${(histórico.valor / 100).toFixed(2)} `
        }
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());