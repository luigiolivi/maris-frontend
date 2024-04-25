import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { useNavigate, useSearchParams } from 'react-router-dom'

import CarouselItem from '../../components/CarouselItem'
import Pagination from '../../components/Pagination'

import { productsState } from '../../utils/states'
import { navigateToSearch } from '../../utils/functions'

const i = name => {
  return require('../../assets/' + name)
}

import * as S from './styles'
export function Search({ searchBy }) {
  const navigate = useNavigate()

  const { products } = productsState()

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

  const indexOfLastProduct = Math.min(
    currentPage * productsPerPage,
    products.length
  )
  const indexOfFirstProduct = Math.max(0, indexOfLastProduct - productsPerPage)
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
    navigate(`/search/?page=${pageNumber}`)
  }

  return (
    <S.Wrapper>
      <S.ProductsWrapper>
        <S.Title>Produtos com &quot;{searchBy}&quot;</S.Title>
        <S.WrapperProducts>
          {currentProducts.map(product => (
            <CarouselItem
              key={product.id}
              isOffer={product.isOffer}
              image={product.image}
              name={product.name}
              price={product.price}
              offerPercentage={product.isOffer && product.offerPercentage}
              installment={product.installment}
              isCatalogue
            />
          ))}

          <Pagination
            totalProducts={products.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </S.WrapperProducts>
      </S.ProductsWrapper>
    </S.Wrapper>
  )
}

Search.propTypes = {
  searchBy: PropTypes.string.isRequired
}

export function SearchIsNull() {
  const navigate = useNavigate()
  const inputRef = useRef(null)

  return (
    <S.NullWrapper>
      <S.Title>Buscar</S.Title>
      <S.Description>
        Use a barra de busca para encontrar produtos:
      </S.Description>
      <S.InputWrapper>
        <S.Input
          placeholder=""
          ref={inputRef}
          onKeyPress={event => event.key === 'Enter' && navigateToSearch(navigate, inputRef)}
        />
        <S.InputPlaceholder>Buscar...</S.InputPlaceholder>
        <S.InputButton onClick={() => navigateToSearch(navigate, inputRef)}>
          <S.Magnifying src={i('magnifying.png')} alt="magnifying-glass-icon" />
        </S.InputButton>
      </S.InputWrapper>
      <S.LinkBackHome onClick={() => navigate('/')}>
        ou clique aqui para voltar à página inicial
      </S.LinkBackHome>
    </S.NullWrapper>
  )
}

export function SearchSelector() {
  const [searchBy, setSearchBy] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  useEffect(() => {
    const searchParam = searchParams.get('q')
    if (searchParam) setSearchBy(searchParam.trim())
    else setSearchBy('')
  }, [searchParams])

  return (
    <>{searchBy === '' ? <SearchIsNull setSearchParams={setSearchParams}/> : <Search searchBy={searchBy} />}</>
  )
}