import Container from 'components/shared/container'
import { HomeContainer } from './styled'
import Card from 'components/card'
import { cardItems } from './data'
import { FC } from 'react'


const Home: FC = () => {
    return (
        <Container>
            <HomeContainer className="home_card">
                {cardItems.map(cardItem => <Card cardItem={cardItem} />)}
            </HomeContainer>
        </Container>
    )
}

export default Home