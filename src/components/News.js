import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import NewsItem from "./NewsItem"
import Spinner from "./Spinner";

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    

    const CapitalFirst = (string )=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdatePage = async()=>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4251a3544a44abaa4aec4e3bbb88172&page=1&pageSize=${props.pageSize}`;
        setLoading(true);
        console.log(props.country)
        props.setProgress(30);
        let data = await fetch(url);
        let ParsedData = await data.json();
        props.setProgress(70);
        setArticles(ParsedData.articles);
        setTotalResults(ParsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title = `${CapitalFirst(props.category)} - NewsDaily`;
        UpdatePage();
    },[])

    const handlePrevClick = async() =>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4251a3544a44abaa4aec4e3bbb88172&page=${page -1}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let ParsedData = await data.json();
        props.setProgress(70);
        setArticles(ParsedData.articles);
        setTotalResults(ParsedData.totalResults);
        setLoading(false);
        setPage(page - 1);
        props.setProgress(100);
    }

    const handleNextClick = async() =>{
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f4251a3544a44abaa4aec4e3bbb88172&page=${page + 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let ParsedData = await data.json();
        props.setProgress(70);
        setArticles(ParsedData.articles);
        setTotalResults(ParsedData.totalResults);
        setLoading(false);
        setPage(page + 1);
        props.setProgress(100);
    }

   
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{margin : '35px 0px', marginTop :"90px"}}> {props.category==="general"?"Top":CapitalFirst(props.category)} Headlines</h1>
                {loading && <Spinner/>}
                <div className="row">
                    {!loading && articles && articles.map((Element)=>{
                        return <div className="col-md-4" key={Element.url}>
                        <NewsItem title={Element.title?Element.title.slice(0,45):""} description={Element.description?Element.description.slice(0,88):""} imgUrl={Element.urlToImage} newsUrl={Element.url} author={!Element.author?"Unknown":Element.author} date={Element.publishedAt} />
                            </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled ={page <= 1}type="button" className="btn btn-dark mx-8" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled ={page +1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark mx-2" onClick={handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    
}


News.defaultProps = {
    country : 'in',
    pageSize :  8,
    category : 'general'
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
}

export default News
