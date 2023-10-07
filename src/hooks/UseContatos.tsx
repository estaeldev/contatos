import { useState } from "react"
import { v4 as uuid } from "uuid"
import Contato from "../interfaces/Contato"

const UseContatos = () => {
    const novoContato: Contato = {nome: "", idade: ""}
    const [contatosList, setContatosList] = useState<Contato[]>([])
    const [contato, setContato] = useState<Contato>(novoContato)

    const addContato = (contato: Contato) => {
        contato.id = uuid()
        const lista = [...contatosList, contato]
        setContatosList(lista)
        setContato(novoContato)
    }

    const removerContato = (contato: Contato) => {
        const id = contato.id
        if(id) {
            const novaLista = contatosList.filter(contato => contato.id !== id)
            setContatosList(novaLista)
        }
    }
    
    return {
        contato, addContato, contatosList, removerContato
    }

}

export default UseContatos