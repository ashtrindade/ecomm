let address = []
function createUserAddressUseCase(logradouro, numero, complemento, bairro, cep, cidade, uf){
    address = {
        logradouro: logradouro,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        uf: uf
    }
    return address
}

function insertUserAddressUseCase(array, email, address){
    let found = 0
    array.forEach(function(item) {
        if ((item.email).includes(email)){
            item.address = address
            found++
        }
    })
    if (found === 0){
        console.log('Error: Email not found.')
    } else {
        console.log('Success: Address updated.')
    }
}

module.export = createUserAddressUseCase(), insertUserAddressUseCase()