
## API Academia 

Uma api criada no curso da Resilia, para o final do módulo 4.

Esta **API REST** é referente a uma academia, e seria parte de contratação do plano.

  
## Ferramentas Utilizadas

* Vscode
* Insomnia


## Blibliotecas

* Express
* Nodemon
* SQLite


## Instalação

primeiro faça o clone do repositório com o comando 

```
git clone https://github.com/danielvdg/Academia-Planos
```
logo depois instale as depedências 

```bash
  npm install 
```


## GET

```
http://localhost:3000/planos

```

## GET Filter

```
http://localhost:3000/planos/:plano

```

## POST

```
http://localhost:3000/planos

```

utilize para inserir dados os seguintes parametros

```
{
    "plano": "STRING",
    "valor": FLOAT,
    "quantidade": INTEGER
}

```

nota : no valor com casas decimais devem ser separados com . por exemplo: 69.99
## DELETE

```
http://localhost:3000/planos/:id

```



## PUT


```
http://localhost:3000/planos/:id

```

selecione o id e envie os parametos no body

```
{
    "plano": "STRING",
    "valor": FLOAT,
    "quantidade": INTEGER
}

```

no valor com casas decimais devem ser separados com . por exemplo: 69.99



    
## Authors

- [@DanielAlves](https://github.com/danielvdg)

  
