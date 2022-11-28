import './Card.css'


const Card = ({ post }) => {
  return (
    <div className="card">
      <p className='card_title'>{post.title}</p>
      <p className='card_author'>{post.author}</p>
      <p className='card_body'>{post.body}</p>
    </div>
  )
}

export default Card