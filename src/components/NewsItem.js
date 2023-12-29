import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem",border:"2px solid black"}}>
        <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/11/20/1600x900/India-Air-Force-Day-15_1698725920499_1700469812214.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
