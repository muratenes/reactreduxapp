import React from 'react'
import {Card, GridColumn, Icon, Image} from 'semantic-ui-react'

const MovieCard = ({movie}) => (
    <GridColumn>
        <Card>
            <Image src={movie.image_url} wrapped ui={false} size={'medium'} />
            <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{movie.created_at}</span>
                </Card.Meta>
                <Card.Description>
                    {movie.spot}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='star'/>
                    {movie.score}
                </a>
            </Card.Content>
        </Card>
    </GridColumn>
)

export default MovieCard
