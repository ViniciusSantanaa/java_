import styles from '@/components/header/header.module.css'
import Link from "next/link"
import Image from "next/image"
import carrinho from "@/assets/shopping_cart_24dp_0A369D_FILL0_wght400_GRAD0_opsz24.png"

export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <nav className={styles.menu}>
                <Link href="/"><h1 className={styles.h1}>Mercado BoaCompra</h1></Link>
                
                <div className={styles.div}>
                    <ul className={styles.lista}>
                        <li><Link href="/mercado" className={styles.lista_itens}>Mercado</Link></li>
                        <li><Link href="/farmacia" className={styles.lista_itens}>Farmácia</Link></li>
                        <li><Link href="/celular" className={styles.lista_itens}>Celular</Link></li>
                        <li><Link href="/eletrodomesticos" className={styles.lista_itens}>Eletrodomésticos</Link></li>
                        <li><Link href="/cadastro" className={styles.lista_itens}>Cadastro</Link></li>
                    </ul>
                </div>


                <Link href="/pagar" className={styles.carrinho}>
                    <Image src={carrinho} alt={"carrinho de compra"}   className={styles.carrinho}/>
                </Link>
            </nav>
        </header>
        </>
    )
}