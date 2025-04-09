'use client'

import styles from '@/components/cadastro/cadastro.module.css'
import { useState } from 'react'

interface formulario {
  titulo_forms: string
  botao_acao: string
}

export const Cadastro = ({ titulo_forms, botao_acao }: formulario) => {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nome,
          value: parseFloat(preco),
          category: categoria,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        alert(`Produto cadastrado com sucesso: ${data.name}`)
      } else {
        alert('Erro ao cadastrar produto')
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro de conexão com o servidor')
    }
  }

  return (
    <div className={styles.fundo_form}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.titulo_forms}>{titulo_forms}</h2>

        <input
          type="text"
          placeholder="Nome do Produto"
          className={styles.label}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preço Produto"
          className={styles.label}
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria Produto"
          className={styles.label}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />

        <button type="submit" className={styles.botao}>
          {botao_acao}
        </button>
      </form>
    </div>
  )
}
