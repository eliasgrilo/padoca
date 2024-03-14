import React from 'react';
import Video from '../components/Video';
import GalleryItem from '../components/GalleryItem';

const Home = () => {
  return (
    <div className="home-page">
      <Video src="https://ik.imagekit.io/tsadb415v5/Model-Y.mp4?updatedAt=1707007336082" />
      <div className="pages">
        <GalleryItem
          videoSrc="https://ik.imagekit.io/tsadb415v5/Model-Y.mp4?updatedAt=1707007336082"
          title="We are Chefs!"
          description="Specializing in French Haute Cuisine!"
          buttons={['Order Now', 'Learn More']}
        />
        <GalleryItem
          imgSrc="https://ik.imagekit.io/tsadb415v5/Model-3.jpg?updatedAt=1709163270492"
          title="Coxinha"
          price="Starting at $3.99/mo*"
          buttons={['Order Now', 'Learn More']}
        />
        <GalleryItem
          imgSrc="https://ik.imagekit.io/tsadb415v5/Model-X.png?updatedAt=1707102567100"
          title="Brigadeiro"
          price="From $6.99*"
          buttons={['Order Now', 'Learn More']}
        />
      </div>
    </div>
  );
};

export default Home;
