import { useState } from 'react';
import {getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import {app } from "../firebase";

export default function CreateListing() {


  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls : [],
  })
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  console.log(formData);

  const handleImageSubmit = (e) =>{
     if(files.length > 0 && files.length + formData.imageUrls.length  < 7){
      setUploading(true);
      setImageUploadError(false);
        const promises = [];

        for(let i = 0; i < files.length ; i++){
          promises.push(storeImages(files[i]));
        }
        Promise.all(promises).then((urls) => {
          setFormData({
            ...formData,
             imageUrls : formData.imageUrls.concat(urls)
            });
            setImageUploadError(false);
            setUploading(false);
        }).catch((error) => {
          setImageUploadError('Image upload failed (2 mb max per image)');
          setUploading(false);
        })
     }else{
      setImageUploadError('You can only upload 6 images per listing')
     };
  }

  const storeImages = async (file) =>{
     return new Promise((resolve, reject) => {
       const storage = getStorage(app);
       const fileName = new Date().getTime() + file.name;
       const storageRef = ref(storage, fileName);
       const uploadTask =  uploadBytesResumable(storageRef, file);
       uploadTask.on(
        "state_changed",
         (snapshot) => {
           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           console.log("Upload is " + progress + "% done");
         },
         (error)=>{
          reject(error);
         },
         ()=>{
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          })
         }
        )
     })
  }

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls : formData.imageUrls.filter((_,i) => i !== index),
    });
  }

  return (
    <main className="p-3 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-8 ">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <input
            className="border p-3  rounded-lg outline-none border-zinc-400 bg-white"
            id="name"
            maxLength="62"
            minLength="10"
            required
            type="text"
            placeholder="Name"
          />
          <textarea
            className="border p-3  rounded-lg outline-none border-zinc-400 bg-white"
            id="description"
            required
            type="text"
            placeholder="Description"
          />
          <input
            className="border p-3  rounded-lg outline-none border-zinc-400 bg-white"
            id="address"
            required
            type="text"
            placeholder="Address"
          />

          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="sale" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="parking" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="furnished" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="offer" />
              <span>Offer</span>
            </div>
          </div>

          <div className="py-2">
            <div className="flex flex-wrap gap-6">
              <div className="flex gap-2 items-center ">
                <input
                  type="number"
                  id="bedrooms"
                  min="1"
                  max="10"
                  required
                  className="px-1 py-3 border border-gray-400 bg-white outline-none rounded-md "
                />
                <p className="text-md">Beds</p>
              </div>
              <div className="flex gap-2 items-center ">
                <input
                  type="number"
                  id="bathrooms"
                  min="1"
                  max="10"
                  required
                  className="px-1 py-3 border border-gray-400 bg-white outline-none rounded-md "
                />
                <p className="text-md">Baths</p>
              </div>
            </div>

            <div className="flex gap-2 items-center pt-7">
              <input
                type="number"
                id="regularPrice"
                min="1"
                max="10"
                required
                className="px-5 py-3 border border-gray-400 bg-white outline-none rounded-md "
              />
              <div className="flex flex-col items-center ">
                <p className="text-md">Regular Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex gap-2 items-center pt-4">
              <input
                type="number"
                id="discountPrice"
                min="1"
                max="10"
                required
                className="px-5 py-3 border border-gray-400 bg-white outline-none rounded-md "
              />
              <div className="flex flex-col items-center">
                <p className="text-md">Discounted Price</p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-5">
          <p className="font-semibold text-gray-900">
            Images:
            <span className="font-normal text-gray-800 ml-2 ">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-6">
            <input onChange={(e) => setFiles(e.target.files) }
              className="p-3 border border-gray-500 rounded outline-none w-full "
              type="file"
              id="images"
              accept="image/*"
              multiple
            />

            <button disabled={uploading} type='button' onClick={handleImageSubmit} className="p-3 border border-green-700 text-green-700 uppercase font-semibold rounded hover:shadow-lg cursor-pointer disabled:opacity-70">
             {uploading ? "Uploading..." : "Upload"}
            </button>
           
          </div>
          <p className='text-red-600 text-sm'>{imageUploadError && imageUploadError}</p>
          {
            formData.imageUrls.length > 0 && formData.imageUrls.map((url,index)=> (
              <div key={url} className="flex items-center justify-between p-3 border border-zinc-400 rounded-lg">
                <img
                 src={url} 
                 className="h-20 w-20 object-contain rounded-lg" 
                 alt="listing image" 
                />
                <button type='button' onClick={() =>handleRemoveImage(index)} className='p-3 text-red-500 rounded-lg uppercase font-semibold hover:opacity-75 cursor-pointer'>Delete</button>
              </div>
            ))
          }
          <button className="p-3 bg-slate-700 text-white uppercase rounded font-semibold">
            Create Listing
          </button>
        </div>
       
      </form>
    </main>
  );
}
