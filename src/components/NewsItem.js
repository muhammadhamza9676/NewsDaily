import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date } = props;
    return (
        <div className="my-3">
            <div className="card">
                <img src={!imgUrl ? "https://www.reuters.com/resizer/0xi6-fi3DXFKaGEZzbAww7g7i-E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OS6WJDV5MVMCVKDJGSMAHYU2LY.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className='text-muted'>By {author} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
