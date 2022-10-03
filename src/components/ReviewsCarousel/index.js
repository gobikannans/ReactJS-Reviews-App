import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {profile: 0}

  onLeft = () => {
    const {profile} = this.state

    if (profile > 0) {
      this.setState(prevState => ({profile: prevState.profile - 1}))
    }
  }

  onRight = () => {
    const {profile} = this.state
    const {reviewsList} = this.props
    const reviewsLen = reviewsList.length

    if (profile < reviewsLen - 1) {
      this.setState(prevState => ({profile: prevState.profile + 1}))
    }
  }

  render() {
    const {profile} = this.state
    const {reviewsList} = this.props

    const profileImg = reviewsList[profile].imgUrl
    const profileName = reviewsList[profile].username
    const userCompany = reviewsList[profile].companyName
    const userReview = reviewsList[profile].description

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={profileImg} alt={profileName} className="img" />
        <p className="user">{profileName}</p>
        <div className="button-container">
          <button type="button" className="btn-style" onClick={this.onLeft}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <button type="button" className="btn-style" onClick={this.onRight}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{userCompany}</p>
        <p className="reviews">{userReview}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
