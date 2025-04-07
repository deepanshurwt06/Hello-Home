import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Home() {
  const [offerListing, setOfferListing] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListing, setRentListing] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListing = async () => {
      try {
        const res = await fetch(`/api/listing/get?offer=true&limit=3`);
        const data = await res.json();
        setOfferListing(data);
        fetchRentListing();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListing = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=3`);
        const data = await res.json();
        setRentListing(data);
        fetchSaleListing();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListing = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&limit=3`);
        const data = await res.json();
        setSaleListing(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListing();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-5 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-700 lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className=" text-gray-500 text-xs sm:text-sm">
          Real Estate is the best place to find your next perfect place to live.
          <br />
          We have the best and most affordable properties for you.
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm font-bold text-blue-800 hover:underline"
        >
          Let's get started...
        </Link>
      </div>

      {/* swiper */}

      <Swiper navigation={true} modules={[Navigation]}>
        {offerListing &&
          offerListing.length > 0 &&
          offerListing.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                className="h-[400px] sm:h-[550px] w-[95%] mx-auto bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${listing.imageUrls?.[0]}")` }}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listings results ,sale or rent */}

      <div className="max-w-7xl mx-auto flex flex-col p-4 gap-8 my-10 ">
        {offerListing && offerListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-700 ">
                Recent Offer
              </h2>
              <Link
                className="text-sm text-gray-700 hover:underline"
                to={`/search?offer=true`}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {offerListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListing && rentListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-700 ">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-gray-700 hover:underline"
                to={`/search?type=rent`}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {rentListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListing && saleListing.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-700 ">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-gray-700 hover:underline"
                to={`/search?type=sale`}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {saleListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
