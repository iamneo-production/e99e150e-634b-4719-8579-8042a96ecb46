import React from 'react';
import "./AboutPage.css"
import Navbar from './navbar';

const AboutPage = () => {
  return (
    <div className='mainbody1'>
    <Navbar/>
    <br/><br/><br/><br/>
    <div className="about-page">
      <h1 className='abouthead'>About RecipeHub</h1>
      <p className='aboutpara1'>
        Welcome to RecipeHub, your go-to destination for all things cooking and recipes! 
        Whether you're a beginner or a seasoned chef, RecipeHub is here to inspire and 
        guide you in the world of culinary delights.
      </p>
      <p>
        Our mission is to bring people together through the joy of cooking and sharing 
        delicious recipes. With our vast collection of recipes from various cuisines 
        around the world, you'll never run out of ideas for your next meal.
      </p>
      <p>
        At RecipeHub, we believe that cooking should be fun and accessible to everyone. 
        That's why we provide step-by-step instructions, ingredient lists, and helpful 
        tips for each recipe, ensuring that even novice cooks can create mouthwatering 
        dishes with confidence.
      </p>
      <p>
        We also understand that dietary preferences and restrictions vary, which is why 
        we offer a wide range of recipes to cater to different needs. Whether you're 
        looking for vegan, gluten-free, or low-carb options, RecipeHub has got you 
        covered.
      </p>
      <p>
        Join our vibrant community of food enthusiasts, where you can share your own 
        recipes, leave reviews, and connect with fellow foodies. Together, let's embark 
        on a culinary adventure and explore the incredible world of flavors and 
        gastronomy!
      </p>
      <p className="signature">Happy Cooking!</p>
    </div>
    </div>
  );
};

export default AboutPage;
