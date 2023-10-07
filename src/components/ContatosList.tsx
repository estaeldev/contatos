import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { AccountCircle, Delete } from "@material-ui/icons";
import { FC } from "react";
import Contato from "../interfaces/Contato";

interface ContatosListProps {
    list: Contato[],
    removerContatoSubmit: (contato: Contato) => void
}

const ContatosList: FC<ContatosListProps> = (props: ContatosListProps) => {

    return (
        <>
            <Grid container alignItems="center" direction="column">
                <Grid item xs={6} style={{width: "100%"}}>
                    <List>
                        {props.list.map(contato => {
                            return (
                                <ListItem key={contato.id}>
                                    <ListItemAvatar >
                                        <Avatar>
                                            <AccountCircle />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={contato.nome} secondary={`Idade: ${contato.idade}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={() => props.removerContatoSubmit(contato)}>
                                            <Delete />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}

export default ContatosList