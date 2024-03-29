import styled, { css } from 'styled-components'

export const CarouselWrapper = styled.div`
  width: 90%;
  margin: 0 50px;
  position: relative;

  .rec-dot {
    display: none;
  }

  .rec-arrow {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    z-index: 1;

    background-color: #9c19e8;
    color: white;
  }

  .rec-arrow:hover {
    background-color: white;
    color: #9c19e8;
    border: 1px solid #9c19e8;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-arrow-left {
    left: -10px;
  }

  .rec-arrow-right {
    right: -10px;
  }

  .Carousel:hover .rec-arrow {
    display: block;
  }

  ${props =>
    props.isSpecialCarousel &&
    css`
      display: flex;
      flex-direction: row;
      margin: 20px 55px 0;
      position: relative;
      border-radius: 20px;
      padding: 10px 0 0 30px;

      background-image: linear-gradient(to right, #6e00b9, #df00ff, #ff00e4);

      .rec-arrow {
        background-color: white;
        color: #9c19e8;
        border: 1px solid #9c19e8;
      }

      .rec-arrow:hover {
        background-color: #9c19e8;
        color: white;
      }

      .Carousel {
        width: 63%;
        position: relative;
        left: 70px;
      }
    `}
`

export const CarouselTitle = styled.h3`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
`

export const RightArrowSeeAll = styled.img`
  height: 18px;
  position: relative;
  top: 3px;
  left: 15px;
  transition: transform 0.3s ease-in-out;
  opacity: 0;
`

export const CarouselSeeAll = styled.label`
  position: absolute;
  top: 10px;
  right: 3px;
  font-weight: 600;
  font-size: 15px;
  color: blue;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateX(-30px);
    filter: brightness(60%);

    ${RightArrowSeeAll} {
      transition: opacity 0.3s linear;
      transform: translateX(-3px);
      opacity: 1;
    }
  }

  &:not(:hover) {
    ${RightArrowSeeAll} {
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      transform: translateX(-3px);
    }
  }
`

export const CarouselBar = styled.div`
  width: 200px;
  height: 6px;

  background-color: #9c19e8;

  border-radius: 50px;

  margin: 5px 0 15px 15px;
`

/* _____SpecialCarousel_____  */
export const SpecialCarouselInformations = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

export const SpecialCarouselTitle = styled.h2`
  color: white;
  margin: 30px 0 20px;
  font-size: 25px;
  width: fit-content;
`

export const SpecialCarouselDescription = styled.p`
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
`

export const SpecialCarouselButton = styled.button`
  background-color: white;
  color: #8500dd;
  border: none;
  width: 220px;
  height: 45px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: #9c19e8;
    border: 2px solid white;
    color: white;
    cursor: pointer;
  }
`
