import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'

import StoriesSlider from '../../components/StoriesSlider'
import Post from '../../components/Post'

import './index.css'

const Home = () => {
  const [stories, setStories] = useState([])
  const [posts, setPosts] = useState([])

  const [storiesLoading, setStoriesLoading] = useState(true)
  const [postsLoading, setPostsLoading] = useState(true)

  const jwtToken = Cookies.get('jwt_token')

  useEffect(() => {
    getStories()
    getPosts()
  }, [])

  const getStories = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/insta-share/stories',
      options,
    )

    const data = await response.json()

    if (response.ok) {
      const updatedStories = data.users_stories.map(eachStory => ({
        userId: eachStory.user_id,
        userName: eachStory.user_name,
        storyUrl: eachStory.story_url,
      }))

      setStories(updatedStories)
    }

    setStoriesLoading(false)
  }

  const getPosts = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(
      'https://apis.ccbp.in/insta-share/posts',
      options,
    )

    const data = await response.json()

    if (response.ok) {
      const updatedPosts = data.posts.map(eachPost => ({
        postId: eachPost.post_id,
        userId: eachPost.user_id,
        userName: eachPost.user_name,
        profilePic: eachPost.profile_pic,
        postDetails: eachPost.post_details,
        likesCount: eachPost.likes_count,
        comments: eachPost.comments,
        createdAt: eachPost.created_at,
      }))

      setPosts(updatedPosts)
    }

    setPostsLoading(false)
  }

  const renderStories = () => {
    if (storiesLoading) {
      return <p>Loading Stories...</p>
    }

    return <StoriesSlider stories={stories} />
  }

  const renderPosts = () => {
    if (postsLoading) {
      return <p>Loading Posts...</p>
    }

    return (
      <ul className="posts-list">
        {posts.map(eachPost => (
          <Post
            key={eachPost.postId}
            postDetails={eachPost}
          />
        ))}
      </ul>
    )
  }

  return (
    <div className="home-container">
      {renderStories()}

      {renderPosts()}
    </div>
  )
}

export default Home