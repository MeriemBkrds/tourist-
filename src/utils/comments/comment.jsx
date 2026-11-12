import React from 'react';
import './comment.css';
import photo from "../../assets/main.jpg"


const commentsData = [
  {
    id: 1,
    name: 'Lyod Gomez',
    image: photo, 
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  },
  {
    id: 2,
    name: 'Lyod Gomez',
    image: photo, 
    
    text: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
  }


  
];

const Comments = () => {
  return (
    <div className="comments-container">
     
      <div className="comments-header">
        <h2 className="comments-title">Happy Customers Says</h2>
        <div className="comments-nav">
          <button className="nav-btn prev" disabled>
            &lt;
          </button>
          <button className="nav-btn next">
            &gt;
          </button>
        </div>
      </div>

       
      <div className="comments-grid">
        {commentsData.map((comment) => (
          <div key={comment.id} className="comment-card">
            
            
            <div className="comment-profile">
              <img src={comment.image} alt={comment.name} className="profile-img" />
              <h4 className="profile-name">{comment.name}</h4>
            </div>

           
            <div className="comment-body">
              <span className="quote-mark top-quote">“</span>
              <p className="comment-text">{comment.text}</p>
              <span className="quote-mark bottom-quote">”</span>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;