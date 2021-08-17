import React from 'react';
import classnames from 'classnames';
import Carousel from 'react-material-ui-carousel'
import carousel_5 from '../static/carousel/carousel_5.png'
import carousel_3 from '../static/carousel/carousel_3.png'
import carousel_6 from '../static/carousel/carousel_6.png'
import { Button } from '@material-ui/core'

const Content = () => {

    const items = [
        {
            src: `${carousel_5}`,
        },
        {
            src: `${carousel_3}`,
        },
        {
            src: `${carousel_6}`,
        }
    ]

    const Item = ({item}) =>{
        return (
            <div className={classnames('w-full')}
                style={{height: '16.625rem'}}
            >
                <img alt="carousel" src={item.src} />
            </div>
        )
    }


    return (
        <div>
            <div className={classnames('w-full')} style={{marginTop: '3.625rem'}}>
                <Carousel
                    navButtonsAlwaysVisible={true}
                    indicators={false}
                    animation={'slide'}
                    next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                    prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
                >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
                </Carousel>
            </div>
        </div>
    )
}

export default Content;