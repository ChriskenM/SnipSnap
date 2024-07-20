
import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="text-gray-700 text-6xl font-semibold">About Us</h2>
      <h3 className="text-2xl font-semibold mb-6">Learn more about SnipSnap</h3>

      <div className="max-w-2xl space-y-4">
        <p className='pb-2'>
        Welcome to SnipSnap - Your Premier African Hairstyling Platform
        </p>
        <p className='pb-2'>
          At SnipSnap, we're passionate about celebrating the beauty and diversity of African hair. Born out of a desire to revolutionize the hairstyling experience across the continent, our platform bridges the gap between talented stylists and discerning clients. We understand that your hair is more than just an accessory - it's an expression of your identity, culture, and creativity
        </p>
        <p className='pb-2'>
        We recognized the challenges faced by both clients in finding the right stylists and by talented hair artists in showcasing their skills. Thus, SnipSnap was born - a platform that not only connects but also educates and inspires
        </p>
        <p className='pb-2'>
        Our platform is more than just a booking app; it's a community where users can share styles, recommend stylists, and access valuable hair care tips to all hair types.
        </p>
        <p className='pb-2'>
        We take pride in our inclusive approach. Whether you're a high-end salon in the heart of Lagos or a skilled home-based stylist in rural Kenya, SnipSnap provides a platform for you to shine. For clients, this means unprecedented access to a wide range of talented professionals and styles, from traditional techniques to the latest trends.
        </p>
        <p className='pb-2'>
        As we grow, our commitment remains steadfast: to empower both stylists and clients, to preserve and promote African hairstyling traditions, and to continually innovate our platform based on your feedback. At SnipSnap, we're not just booking appointments; we're weaving connections, one strand at a time. Join us in this exciting journey of self-expression, community, and beautiful hair!
        </p>
        <p className='pb-2'>
          For more information, please contact us at:{' '}
          <a href="mailto:info@snipsnap.com" className="text-primary hover:underline">
            info@snipsnap.com
          </a>
        </p>
      </div>

      <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">SS</h4>

    </div>
  );
};

export default About;
