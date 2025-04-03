import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

export default function ListingPage() {
  
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
      {listing && listing.imageUrls && listing.imageUrls.length > 0 &&  (
        <Swiper navigation={true} modules={[Navigation]} >
          {listing.imageUrls.map((url) => (
            <SwiperSlide key={url}>
             

              <div
                className="h-[550px] w-full bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${url}")` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )  }
    </main>
  );
}
