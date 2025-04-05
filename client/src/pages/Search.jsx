export default function Search() {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="p-7  border-zinc-400  border-b-2 sm:border-r-2 md:min-h-screen">
                <form className="flex flex-col gap-8"> 
                    <div className="flex items-center gap-3 ">
                        <label className="whitespace-nowrap font-semibold">Search Term : </label>
                        <input type=" text"
                        id="searchTerm"
                        placeholder="Search..."
                        className="border-2 border-zinc-500 outline-none rounded-lg p-3 w-full bg-slate-200" />
                    </div>

                    <div className="flex gap-6 fex-wrap items-center ">
                         <label className="font-semibold">Type :</label>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="all" 
                            className="w-5"/>
                            <span>Rent & Sale</span>
                          </div>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="rent" 
                            className="w-5"/>
                            <span>Rent</span>
                          </div>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="sale" 
                            className="w-5"/>
                            <span> Sale</span>
                          </div>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="offer" 
                            className="w-5"/>
                            <span>Offer</span>
                          </div>
                    </div>

                    <div className="flex gap-6 fex-wrap items-center">
                         <label className="font-semibold">Amenities :</label>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="parking" 
                            className="w-5"/>
                            <span>Parking </span>
                          </div>
                          <div className=" flex gap-2 ">
                            <input type="checkbox" id="furnished" 
                            className="w-5"/>
                            <span>Furnished</span>
                          </div>
                         
                    </div>

                    <div className="flex items-center gap-4 ">
                        <label className="font-semibold">Sort :</label>
                        <select  id="Sort_order" className="border border-zinc-500 rounded-md p-1 outline-none bg-slate-200">
                            <option >Price high to low</option>
                            <option >Price low to high</option>
                            <option >Latest</option>
                            <option >Oldest</option>

                        </select>
                    </div>
                    <button className="bg-slate-700 text-white p-3 uppercase rounded-lg">Search</button>
                </form>

            </div>
            <div className="">
               <h1 className="text-3xl font-semibold text-zinc-800  border-b-2 border-zinc-400 p-3 mt-5">Listing result : </h1>
            </div>
        </div>
    )
}