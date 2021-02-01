import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContainer.css'

const NewsContainer = ({newsArray}) => {
    return (
        <div>
            <Container maxWidth="md">
                <div className="content">
                    <div className="downloadMessage">
                        <span className="downloadText">
                        For the best experience use inshorts app on your smartphone
                        </span>
                        <img src="https://assets.inshorts.com/website_assets/images/appstore.png"
                         alt="ios store" height="80%" />
                         <img src="https://assets.inshorts.com/website_assets/images/playstore.png"
                         alt="play store" height="80%" />
                    </div>
                    {
                        newsArray.map((newsItem) => (
                            <NewsCard newsItem={newsItem} key={newsItem.title} />
                        )) 
                    }

                </div>
            </Container>
        </div>
    )
}

export default NewsContainer
