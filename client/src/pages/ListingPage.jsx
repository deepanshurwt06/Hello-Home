import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { MdLocationOn } from "react-icons/md";
import { FaBath, FaBed, FaChair, FaParking } from "react-icons/fa";
import {useSelector} from "react-redux";
import Contact from "../components/Contact";

export default function ListingPage() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  console.log("Listing Data:", listing);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className="text-center text-3xl my-9">Loading...</p>}
      {error && (
        <p className="text-center text-3xl my-9">Something went wrong</p>
      )}
      {listing && listing.imageUrls && listing.imageUrls.length > 0 ? (
        <Swiper navigation={true} modules={[Navigation]}>
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
              <div
                className="h-[550px] w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${url}")` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        !loading && (
          <p className="text-center text-xl my-6">No images available</p>
        )
      )}
      <div className="max-w-6xl mx-auto mb-5">
        {listing &&
          listing.name &&
          listing.regularPrice &&
          !loading &&
          !error && (
            <div className="pt-7 ">
              <div className="flex p-6">
                <h1 className="tracking-tight text-3xl font-medium">
                  {listing.name} - $ {listing.regularPrice} / month
                </h1>
              </div>
              <div className="flex px-4 gap-2">
                <MdLocationOn className="text-blue-700 text-2xl" />
                <h4 className="text-md">new listing</h4>
              </div>
              <div className="px-6 pt-8 flex gap-6">
                <p className="bg-red-900 text-white w-full max-w-[200px] text-center p-1 rounded-md">
                  {listing.type === "rent" ? "For Rent" : "For Sale"}
                </p>
                {listing.offer && (
                  <p className="bg-green-900 text-white w-full max-w-[200px] text-center p-1 rounded-md">
                    ${listing.regularPrice - listing.discountedPrice} discount
                  </p>
                )}
              </div>
              <p className="px-6 pt-7 text-slate-800">
                <span className="font-semibold text-black">Description :</span>
                {listing.description}
              </p>
              <div className="px-6 pt-4">
                <ul className="flex gap-3 flex-wrap sm:gap-7 mb-5">
                  <li className="flex items-center gap-1 whitespace-nowrap text-green-900 font-semibold text-sm">
                    <FaBed className="text-xl" />
                    {listing.bedrooms > 1
                      ? `${listing.bedrooms} Beds`
                      : `${listing.bedrooms} Bed`}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap text-green-900 font-semibold text-sm">
                    <FaBath className="text-lg" />
                    {listing.bathrooms > 1
                      ? `${listing.bathrooms} Baths`
                      : `${listing.bathrooms} Bath`}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap text-green-900 font-semibold text-sm">
                    <FaParking className="text-lg" />
                    {listing.parking ? "Parking" : "No Parking"}
                  </li>
                  <li className="flex items-center gap-1 whitespace-nowrap text-green-900 font-semibold text-sm">
                    <FaChair className="text-lg" />
                    {listing.furnished ? "Furnished" : "Unfurnished"}
                  </li>
                </ul>
                 { currentUser && listing.userRef !== currentUser._id && !contact &&(
                   <button onClick={()=> setContact(true)} className="bg-slate-700 text-white rounded-lg hover:opacity-95 uppercase p-3 w-full my-5">Contact  Landlord</button>
                 ) }
                 { contact && <Contact  listing={listing} /> }

               
              </div>
             
            </div>
          )}
      </div>
    </main>
  );
}
