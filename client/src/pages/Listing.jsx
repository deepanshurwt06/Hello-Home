
import { useEffect, useState } from 'react';

import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';


export default function Listing() {
    const currentUser = useSelector((state) => state.user.currentUser);
 
    const [listings, setListings] = useState([]);
    const [listingError, setListingError] = useState(false)

    useEffect(()=>{
      const fetchListing = async ()=>{
        if(!currentUser) return;
        try {
            const res = await fetch(`/api/user/listings/${currentUser._id}`);
            const data = await res.json();
            if(data.success === false){
                setListingError(true);
                return;
            }           
            setListings(data);
        } catch (error) {
           setListingError(true, error.message); 
        }
      };
      fetchListing();
    },[currentUser]);

    const handleListingDelete = async (listingId)=>{
        try{
          const res = await fetch(`/api/listing/delete/${listingId}`,{
            method:"DELETE",

          });
          const data = await res.json();
          if(data.success === false){
            console.log(data.message);
            return;
          }
          setListings((prev) => prev.filter((listing)=> listing._id !== listingId));
        }catch(error){
            console.log(error);
        }
    }
    return (
       <main className="px-4 max-w-5xl mx-auto flex flex-col gap-4">
        <h1 className="text-center py-12 font-bold text-3xl uppercase">All Listings</h1>
       
       {listings.length === 0 ?(
         <p>No Listing found</p>
       ):(
        listings.map((listing)=>(
            <div key={listing._id} className="w-full border border-zinc-400 flex justify-between items-center p-3">
            <div className="flex gap-5 items-center ">
             <img className="w-22 h-22" src={listing.imageUrls[0]}  />

             <Link to={`/listing/${listing._id}`}>
             <h4 className="text-xl capitalize font-semibold text-zinc-800 hover:underline truncate">{listing.name}</h4>
             </Link>

            </div>
            <div className="flex flex-col items-center">
            <button onClick={()=>handleListingDelete(listing._id)} className="font-semibold text-red-500 cursor-pointer hover:opacity-80">Delete</button>

            <Link to={`/update-listing/${listing._id}`}>
            <button className="font-semibold text-green-600 cursor-pointer hover:opacity-80">Edit</button>
            </Link>
            </div>
           
 
         </div>
        ))
       )}
       </main>
    )
}