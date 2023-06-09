import { useState } from 'react'
import { MagnifyingGlass, ArrowRight, List } from 'phosphor-react'
import FeaturedImage from '../../images/featured-image.png'
import * as Styles from './styles'
import LogoHeader from '../../assets/LogoHeader.svg'
import { DefaultTheme } from '../../styles/theme/default'
import { MenuMobile } from '../MenuMobile'

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  console.log(LogoHeader)
  return (
    <Styles.Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Styles.Header>
        <img src={LogoHeader} alt="" />
        <Styles.ListContainer>
          <li>Home</li>
          <li>Sobre</li>
          <li>Categorias</li>
          <li>Contato</li>
        </Styles.ListContainer>

        <Styles.FormContainer>
          <Styles.Input type="text" placeholder="Buscar" />
          <Styles.Button>
            <MagnifyingGlass size={32} color={'white'} />
          </Styles.Button>
        </Styles.FormContainer>
        <List size={42} color="white" onClick={() => setMenuIsVisible(true)} />
      </Styles.Header>

      <Styles.MainContainer>
        <div>
          <Styles.Title>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022.
          </Styles.Title>
          <Styles.DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{' '}
          </Styles.DescriptionText>

          <Styles.SeeMoreText>
            Veja mais
            <ArrowRight size={32} color={DefaultTheme.green} cursor="pointer" />
          </Styles.SeeMoreText>
        </div>

        <Styles.ImageContainer>
          <img src={FeaturedImage} alt="" />
        </Styles.ImageContainer>
      </Styles.MainContainer>
    </Styles.Container>
  )
}
