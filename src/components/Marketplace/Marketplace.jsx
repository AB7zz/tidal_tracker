import React from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { Context } from '../AppContext/AppContext';
import TopNav from '../TopNavbar/TopNav'
import { Link } from 'react-router-dom';
export const EachProduct = ({ name, price, owner, imageUrl }) => {
    return (
    <div className="flex productbox">
        <div className="mr-4 px-3">
            <h2 className="text-xl">{name}</h2>
            <p>Price: {price}</p>
            <p>Owner: {owner}</p>
            <button className="bg-red">Rent Product</button>
        </div>
        <div className='ml-16'>
            <img src={imageUrl} className="w-20 h-20"/>
        </div>
    </div>
    );
  }

const Marketplace = () => {
    const {initFirebase, db2} = React.useContext(Context)
    const [docs, setTheDoc] = React.useState([])
    React.useEffect(() => {
        initFirebase()
    }, [])
    

    const display = async() => {
        try{
            const querySnapshot = await getDocs(collection(db2, "marketplace"));
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data().title}`);
                setTheDoc(docs => [...docs, {
                    title: doc.data().title,
                    image: doc.data().image,
                    user: doc.data().user,
                    price: doc.data().price
                }])
            });
        }catch(e){
            console.log(e)
        }
    }
    // insert()
    React.useEffect(() => {
        setTheDoc([])
        display()
        console.log(docs)
    }, [])
    return (
        <div>
            <TopNav/>
            <h2 className='text-4xl mb-4 text-center font-bold'>Marketplace</h2>
            <Link to='/upload' className='ml-40 mb-4 bg-blue-400 p-1 rounded text-white'>Upload</Link>
            {/* {docs && console.log(docs)}
        
            <EachProduct name="Fibre Boat" price={50} owner="Harshed" imageUrl="http://www.outdeck.com/images/BIC-Boats/With-Logo/310-02-fibre-fishing-boat-price.jpg" />
            <EachProduct name="Net" price={75} owner="Sameer" imageUrl="https://images.unsplash.com/photo-1538904029080-68e0f3167224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaGluZyUyMG5ldHxlbnwwfHwwfHw%3D&w=1000&q=80" /> 
            <EachProduct name="Net" price={75} owner="Sameer" imageUrl="https://images.unsplash.com/photo-1538904029080-68e0f3167224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaGluZyUyMG5ldHxlbnwwfHwwfHw%3D&w=1000&q=80" /> */}

            {docs && docs.map((data) => (
                <EachProduct name={data.title} price={data.price} owner={data.user} imageUrl="http://www.outdeck.com/images/BIC-Boats/With-Logo/310-02-fibre-fishing-boat-price.jpg" />  
            ))
            }
        </div>
    )
}

export default Marketplace