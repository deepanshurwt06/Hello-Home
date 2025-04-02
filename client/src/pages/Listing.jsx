
import { useEffect, useState } from 'react';

import { useSelector } from "react-redux"


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
    return (
       <main className="px-4 max-w-5xl mx-auto flex flex-col gap-4">
        <h1 className="text-center py-12 font-bold text-3xl uppercase">All Listings</h1>
       
       {listings.length === 0 ?(
         <p>No Listing found</p>
       ):(
        listings.map((listing)=>(
            <div key={listing._id} className="w-full border border-zinc-400 flex justify-between items-center p-3">
            <div className="flex gap-5 items-center ">
             <img className="w-22 h-22 bg-red-600" src={listing.imageUrls[0]} alt="" />
             <h4 className="text-xl capitalize font-semibold text-zinc-800 hover:underline truncate">{listing.name}</h4>
            </div>
            <div className="flex flex-col items-center">
            <span className="font-semibold text-red-700 cursor-pointer hover:opacity-80">Delete</span>
            <span className="font-semibold text-green-700 cursor-pointer hover:opacity-80">Edit</span>
            </div>
 
         </div>
        ))
       )}
       </main>
    )
}