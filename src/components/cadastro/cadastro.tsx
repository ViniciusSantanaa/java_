import styles from '@/components/cadastro/cadastro.module.css'


interface formulario{
    titulo_forms: string,
    botao_acao: string,
}


export const Cadastro = ({ titulo_forms, botao_acao }: formulario) => {
    return(
        <>
        <div className={styles.fundo_form}>
            <form className={styles.form}>
                <h2 className={styles.titulo_forms}>{titulo_forms}</h2>

                <input type="text" placeholder="Nome do Produto" className={styles.label}></input>
                <input type="number" placeholder="Preço Produto" className={styles.label}></input>
                <input type="number" placeholder="Categoria Produto" className={styles.label}></input>

                <button type="submit" className={styles.botao}>{botao_acao}</button>
            </form>
        </div>
    </>
    )
}