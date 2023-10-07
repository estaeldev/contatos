import { FC } from "react";
import UseContatos from "../hooks/UseContatos";
import ContatosForm from "./ContatosForm";
import ContatosList from "./ContatosList";


const Contatos: FC = () => {

    const {contato, contatosList, addContato, removerContato} = UseContatos()

    return (
        <>
            <ContatosForm contato={contato} addContatoSubmit={addContato}/>
            <ContatosList list={contatosList} removerContatoSubmit={removerContato}/>
        </>
    )
}

export default Contatos
