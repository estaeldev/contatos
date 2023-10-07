import { Button, Grid, TextField } from "@material-ui/core";
import { FormikHelpers, useFormik } from "formik";
import { FC } from "react";
import Contato, { validacao } from "../interfaces/Contato";

interface ContatosFormProps {
    contato: Contato,
    addContatoSubmit: (contato: Contato) => void
}

const ContatosForm: FC<ContatosFormProps> = (props: ContatosFormProps) => {

    const onSubmit = (contato: Contato, helper: FormikHelpers<Contato>) => {
        props.addContatoSubmit(contato)
        helper.resetForm()
    }
    
    const formik = useFormik<Contato>({
        onSubmit,
        initialValues: props.contato,
        validationSchema: validacao,
        validateOnChange: false
    })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit} style={{padding: "20px"}}>

                <Grid container direction="column" spacing={1} alignItems="center">

                    <Grid item xs={6} style={{width: "100%"}}>
                        <TextField 
                            style={{width: "100%"}}
                            variant="outlined"
                            name="nome" 
                            label="Nome" 
                            value={formik.values.nome} 
                            onChange={formik.handleChange} >
                        </TextField>
                        <span style={{color: "red"}}>{formik.errors.nome}</span>
                    </Grid>
                    <Grid item xs={6} style={{width: "100%"}}> 
                        <TextField 
                            type="number"
                            style={{width: "100%"}}
                            variant="outlined" 
                            label="Idade" 
                            name="idade" 
                            value={formik.values.idade} 
                            onChange={formik.handleChange} >
                        </TextField>
                        <span style={{color: "red"}}>{formik.errors.idade}</span>
                    </Grid>
                    <Grid item xs={6} style={{width: "100%"}}>
                        <Button 
                            style={{width: "100%"}}
                            variant="contained" 
                            type="submit"
                            color="primary">
                                Adicionar
                        </Button>
                    </Grid>

                </Grid>
            </form>
        </>
    )

}

export default ContatosForm
