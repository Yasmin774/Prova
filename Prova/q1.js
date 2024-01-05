const detalharEndereco = (endereco) => {
    let {rua, cidade, CEP} = endereco; 
    return `Rua: ${rua}, Cidade: ${cidade}, CEP: ${CEP}`;
  };
  
  
  console.log(formatarString({rua : "Rua das Flores", cidade: "Porto Alegre" ,CEP: "90000-000"}));

