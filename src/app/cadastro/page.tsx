import { Cadastro } from '@/components/cadastro/cadastro'

export default function cadastro(){
    return(
        <>
            <Cadastro titulo_forms={'Cadastro De Produtos'} label={'Nome do Produto'} botao_acao={'Cadastrar'} />
        </>
    )
}