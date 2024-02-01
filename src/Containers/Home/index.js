import React from 'react'

import Carousel from 'react-elastic-carousel'

import AmbientCategoryImg from '../../assets/ambientCategory.png'
import Bag from '../../assets/bag.svg'
import HeaderBarImg from '../../assets/bar.png'
import Cart from '../../assets/cart.svg'
import DownArrowImg from '../../assets/down-arrow.png'
import FeminineCategoryImg from '../../assets/feminineCategory.png'
import FooterBarImg from '../../assets/footerBar.png'
import LogoImg from '../../assets/logo.png'
import MagnifyingImg from '../../assets/magnifying.png'
import MasculineCategoryImg from '../../assets/masculineCategory.png'
import OfferCategoryImg from '../../assets/offerCategory.png'
import PerfumeImg from '../../assets/perfume.jpg'
import Person from '../../assets/person.png'
import MainImageImg from '../../assets/teste.png'

import * as S from './styles'

function Home () {
  return (
    <S.Container>
      <S.Header>
        <S.MainHeader>
          <S.Logo src={LogoImg} alt='logo' />
          <S.DivInput>
            <S.Input placeholder='O que está buscando?'/>
            <S.SearchInputButton><S.Magnifying src={MagnifyingImg} alt='magnifying-glass-icon' /></S.SearchInputButton>
          </S.DivInput>

          <S.DivHeaderIcons>
            <S.Icons src={Person} alt='icone-person' /><S.AIcons><S.LabelLogin>Entrar / Cadastrar</S.LabelLogin><br /> Minha conta <S.DownArrow src={DownArrowImg}/></S.AIcons>
            <S.Icons src={Bag} alt='icone-sacola' /><S.AIcons>Meus pedidos</S.AIcons>
            <S.Icons src={Cart} alt='icone-carrinho' /><S.AIcons>Carrinho</S.AIcons>
          </S.DivHeaderIcons>
        </S.MainHeader>

        <S.HeaderSections>
          <S.ASections>Início</S.ASections>
          <S.ASections>Catálogo</S.ASections>
          <S.ASections>Categorias <S.DownArrow src={DownArrowImg} /></S.ASections>
        </S.HeaderSections>

        <S.HeaderBar src={HeaderBarImg}/>
      </S.Header>

      <S.Main>
        <S.MainImage src={MainImageImg}/>

        <S.CategoriesWrapper>
            <S.CategoryImage src={OfferCategoryImg} alt="offer-category-icon" className="offerImage"/>
            <S.CategoryDescription className='offerDescription'>Ofertas</S.CategoryDescription>

            <S.CategoryImage src={FeminineCategoryImg} alt="feminine-category-icon" className="feminineImage"/>
            <S.CategoryDescription className='feminineDescription'>Feminino</S.CategoryDescription>

            <S.CategoryImage src={MasculineCategoryImg} alt="masculine-category-icon" className="masculineImage"/>
            <S.CategoryDescription className="masculineDescription">Masculino</S.CategoryDescription>

            <S.CategoryImage src={AmbientCategoryImg} alt="ambient-category-icon" className="ambientImage"/>
            <S.CategoryDescription className="ambientDescription">Ambiente</S.CategoryDescription>
        </S.CategoriesWrapper>

        <S.CarouselWrapper>
          <S.CarouselTitle>Ofertas da semana
          <S.CarouselSeeAll>Ver todos</S.CarouselSeeAll></S.CarouselTitle>
          <S.CarouselBar></S.CarouselBar>
          <Carousel className="Carousel" itemsToShow={5}>
            <S.CarouselItem>
              <S.ItemImage src={PerfumeImg} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00</S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={PerfumeImg} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00</S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={PerfumeImg} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00</S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={PerfumeImg} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00</S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>

            <S.CarouselItem>
              <S.ItemImage src={PerfumeImg} alt='perfume-image'/>
              <S.ItemName>Perfume Pascal Morabito Purple Lady - Eau de Parfum Feminino</S.ItemName>
              <S.ItemPrice>R$ 142,00</S.ItemPrice>
              <S.ItemInstallment>em até <b>12x</b> de <span style={{ color: 'green', fontWeight: 600 }}>R$ 11,83</span></S.ItemInstallment>
            </S.CarouselItem>
          </Carousel>
        </S.CarouselWrapper>

        <S.AboutWrapper>
          <S.AboutTitle>Sobre nós</S.AboutTitle>
          <S.AboutDescription>Somos uma empresa top de perfumes</S.AboutDescription>
        </S.AboutWrapper>

        <S.FooterBar src={FooterBarImg} alt='footer-bar-img'/>
      </S.Main>
    </S.Container>
  )
}

export default Home
