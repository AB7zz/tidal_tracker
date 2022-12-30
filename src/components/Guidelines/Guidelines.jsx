import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../TopNavbar/TopNav';

const Guidelines = () => {
  return (
    <>
    <TopNav/>
    <div style={{height: '1400px'}} className="text-xl font-bold text-center p-4 bg-white-500 mb-4 ">
      <h1 className="text-2xl">SAFETY AND GUIDELINES</h1>
      <br />
      <ul className="list-disc list-inside text-black">
        <li className="bg-green-300 p-2">If using a boat to fish, your most important piece of boat safety equipment is your life jacket. For optimum fishing safety, make sure each passenger wears one, too.</li>
        <br />
        <li className="bg-green-300 p-2">Check the weather: Check the weather forecast before heading out to fish and be prepared for changing conditions. Avoid fishing in rough waters or during storms, as these can be dangerous.</li>
        <br />
        <li className="bg-green-300 p-2">Stay hydrated: Drink plenty of water to stay hydrated, especially on hot days. Dehydration can cause fatigue, which can impair your judgment and increase the risk of accidents.</li>
        <br />
        <li className="bg-green-300 p-2">Use caution when baiting and removing hooks.</li>
        <br />
        <li className="bg-green-300 p-2">Also, never attempt to remove a hook from around a person's eyes, face, the back of the hands, or any area where ligaments, tendons, or blood vessels are visible.</li>
        <br />
        
        <li className="bg-green-300 p-2">Be aware of your surroundings: Pay attention to your surroundings and be alert for any potential hazards. This includes keeping an eye out for other boats and avoiding areas with strong currents or heavy boat traffic.</li>
        <br />     
      </ul>
        <div className="flex justify-center">
            <Link className='bg-green-500 text-white p-1 rounded' to='/game'>Play a game!</Link>
        </div>
    </div>
    </>
  );
}

export default Guidelines;