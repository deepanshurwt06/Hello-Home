import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
  console.log("regular price", listing.regularPrice);
  console.log("discounted price", listing.discountPrice);
  console.log("Listing props:", listing);
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full md:w-[320px] lg:w-[360px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[260px] sm:h-[260px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />

        <div className="p-3 flex flex-col gap-3 w-full">
          <p className="text-xl font-semibold text-slate-700 truncate">
            {listing.name}
          </p>

          <div className="flex items-center gap-3  ">
            <MdLocationOn className="w-4 h-4 text-green-700" />
            <p className="text-sm text-gray-700">{listing.address}</p>
          </div>
          <p className="text-sm text-gray-700 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 font-semibold">
            ${" "}
            {listing.offer && listing.discountPrice !== undefined
              ? listing.discountPrice.toLocaleString("en-US")
              : (listing.regularPrice ?? 0).toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex gap-4">
            <div className="font-bold text-xs text-slate-700">
                { listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed` }
            </div>
            <div className="font-bold text-xs text-slate-700">
                { listing.bathrooms > 1 ? `${listing.bathrooms} beds` : `${listing.bathrooms} bath` }
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
