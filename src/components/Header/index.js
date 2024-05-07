import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Login from '../Login'

import { stringToUrl, navigateToSearch } from '../../utils/functions'
import { categoriesState } from '../../utils/states'

const i = name => {
  return require('../../assets/' + name)
}

export default function Header() {
  const navigate = useNavigate()
  const [wasLoginClicked, setWasLoginClicked] = useState(false)
  const loginRef = useRef()
  const labelLoginRef = useRef()

  const { categories } = categoriesState()

  window.addEventListener('click', e => {
    if (e.target !== loginRef.current && e.target !== labelLoginRef.current) {
      setWasLoginClicked(false)
    }
  })

  const inputRef = useRef(null)

  return (
    <S.Header>
      <S.HeaderTop>
        <S.Logo src={i('logo.png')} alt="logo" />
        <S.DivInput>
          <S.Input placeholder="O que está buscando?" ref={inputRef} onKeyPress={(event) => event.key === 'Enter' && navigateToSearch(navigate, inputRef)} />
          <S.SearchInputButton onClick={() => navigateToSearch(navigate, inputRef)}>
            <S.Magnifying
              src={i('magnifying.png')}
              alt="magnifying-glass-icon"
            />
          </S.SearchInputButton>
        </S.DivInput>

        <S.DivHeaderIcons>
          <S.Icons src={i('person.png')} alt="icone-person" />
          <S.AIcons>
            <S.LabelLogin>Entrar / Cadastrar</S.LabelLogin>
            <br />
            <S.LabelLogin
              ref={labelLoginRef}
              className="labelMinhaConta"
              onClick={() => {
                setWasLoginClicked(!wasLoginClicked)
              }}
            >
              Minha conta <S.DownArrow src={i('downArrow.png')} />
            </S.LabelLogin>

            <S.LoginWrapper
              wasClicked={wasLoginClicked}
              ref={loginRef}
              onClick={e => {
                e.stopPropagation()
              }}
            >
              <Login accountComponent="login" isPopup />
            </S.LoginWrapper>
          </S.AIcons>

          <S.AIcons>
            <S.Icons src={i('bag.svg')} alt="icone-sacola" />{' '}
            <span>Meus pedidos</span>
          </S.AIcons>

          <S.AIcons className="carrinhoHeaderDiv">
            <S.Icons src={i('cart.svg')} alt="icone-carrinho" />
            <S.QuantidadeProdutosCarrinho>
              <p>0</p>
            </S.QuantidadeProdutosCarrinho>{' '}
            <span style={{ marginLeft: '5px' }}>Carrinho</span>
          </S.AIcons>
        </S.DivHeaderIcons>
      </S.HeaderTop>

      <S.HeaderBottom>
        <S.ASections onClick={() => navigate('/')}>Início</S.ASections>

        <S.ASections onClick={() => navigate('/products/?category=all&page=1')}>
          Catálogo
        </S.ASections>

        <S.ASections className="ACategoriasHeader">
          Categorias <S.DownArrow src={i('downArrow.png')} />
        </S.ASections>
        <S.PopupCategories>
          <ul>
            {categories.map(category => (
              <li
                style={{ fontSize: '14px' }}
                key={category.id}
                onClick={() =>
                  navigate(`/products/?category=${stringToUrl(category.name)}`)
                }
              >
                {category.name}
              </li>
            ))}
          </ul>
        </S.PopupCategories>
      </S.HeaderBottom>

      <S.HeaderBar src={i('bar.png')} />
    </S.Header>
  )
}
