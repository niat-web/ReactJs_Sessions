import './index.css'

const Post = props => {
  const {postDetails} = props

  const {
    profilePic,
    userName,
    postDetails: imageDetails,
    likesCount,
    comments,
    createdAt,
  } = postDetails

  return (
    <li className="post-card">
      <div className="post-header">
        <img
          src={profilePic}
          alt={userName}
          className="profile-pic"
        />

        <p className="username">{userName}</p>
      </div>

      <img
        src={imageDetails.image_url}
        alt="post"
        className="post-image"
      />

      <div className="post-content">

        <div className="post-actions">
          <button
            type="button"
            className="icon-button"
          >
            ❤️
          </button>

          <button
            type="button"
            className="icon-button"
          >
            💬
          </button>

          <button
            type="button"
            className="icon-button"
          >
            📤
          </button>
        </div>

        <p className="likes">
          {likesCount} likes
        </p>

        <p className="caption">
          <span className="username">
            {userName}
          </span>{' '}
          {imageDetails.caption}
        </p>

        <ul className="comments-list">
          {comments.map(eachComment => (
            <li key={eachComment.user_id}>
              <span className="username">
                {eachComment.user_name}
              </span>{' '}
              {eachComment.comment}
            </li>
          ))}
        </ul>

        <p className="created-at">
          {createdAt}
        </p>

      </div>
    </li>
  )
}

export default Post