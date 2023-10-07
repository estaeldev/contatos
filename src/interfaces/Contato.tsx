import * as Yup from "yup"

interface Contato {
    id?: string
    nome: string, 
    idade: number | ''
}

export const validacao = Yup.object().shape({
    nome: Yup.string()
            .required("Campo obrigatório!")
            .min(3, "Digite pelo menos 3 caracteres"),
    idade: Yup.number()
            .required("Campo obrigatório!")
            .min(10, "Idade mínima é 10 anos")
            .max(100, "Idade maxima é de 100 anos")
})

export default Contato