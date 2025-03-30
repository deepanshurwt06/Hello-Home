import { useSelector } from "react-redux";
import { useRef, useState ,useEffect} from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { updateUserStart,  updateUserFailure, updateUserSuccess, deleteUserStart ,deleteUserSuccess ,deleteUserFailure} from "../redux/user/userSlice";

export default function Profile() {
    const fileRef = useRef(null);
    const [image, setImage] = useState(undefined);
    const [imagePercentage, setImagePercentage] = useState(0);
    const [imageError, setImageError] = useState(false);  
    const [formData, setFormData] = useState({})
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const dispatch = useDispatch();
    
    
    const { currentUser ,loading ,error} = useSelector((state) => state.user);
  
    useEffect(()=>{
        if(image){
            handleFileUpload(image);
        }
    },[image])
   
    const handleFileUpload = async (image) => {
       const storage = getStorage(app);
       const fileName = new Date().getTime() + image.name;
       const storageRef = ref(storage, fileName);
       const uploadTask =  uploadBytesResumable(storageRef, image);
       uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setImagePercentage(Math.round(progress));
        },
        (error) =>{
            setImageError(true);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setFormData({...formData, profilePicture: downloadURL})
            });
        });
    };
   

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)              
            });
            const data = await res.json();
            if(data.success === false){
                dispatch(updateUserFailure(data));
                return;
            }
            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);          
            
        } catch (error) {
           dispatch(updateUserFailure(error.message));
        }
      };

    const handleDeleteAccount = async () => {
        try {
            dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if(data.success === false){
                dispatch(deleteUserFailure(data));
                return;
            }
            dispatch(deleteUserSuccess(data));
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    }
 
    
    return (
        <div className="flex flex-col max-w-lg mx-auto p-5 gap-6">
            <h1 className="text-4xl font-semibold text-center my-9">Profile</h1>
            <input  type="file" ref={fileRef} hidden accept="image/*" onChange={(e)=> setImage(e.target.files[0])}/>
             <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <img  src={formData.profilePicture || currentUser.profilePicture} alt="profile" onClick={() => fileRef.current.click()}  onChange={handleChange} className="h-26 w-26 object-cover self-center rounded-full"/>
             
                <p className="text-sm self-center">
                    {imageError ?(
                        <span className="text-red-500">Error Uploading Image (file size must be less than 2 MB)</span>
                    ) : imagePercentage > 0 && imagePercentage < 100 ? (
                       <span className="text-slate-700">{`Uploading: ${imagePercentage } %`}</span>
                    ) : imagePercentage === 100 ? (
                        <span className="text-green-700">Image uploaded successfully</span>
                    ) : ('')
                    }
                </p>
            

            <input type="text" id="username" placeholder="username" defaultValue={currentUser.username}
             className="bg-slate-100 border-2 border-zinc-500 p-3 outline-none rounded-md" onChange={handleChange} />
             

              {/* firebase storage rules 
             allow read;
             allow write if
             request.resource.size < 2 *1024 *1024 &&
             request.resource.contentType.matches('image/.*')        */}

            <input type="text" id="email" placeholder="email" defaultValue={currentUser.email}
             className="bg-slate-100 border-2 border-zinc-500 p-3 outline-none rounded-md" onChange={handleChange} />

            <input type="text" id="password" placeholder="password"
             className="bg-slate-100 border-2 border-zinc-500 p-3 outline-none rounded-md" onChange={handleChange} />

             <button className="p-3 bg-slate-800 font-medium text-white rounded-md uppercase hover:opacity-95 disabled:opacity-80">Update</button>

             </form>
             <div className="flex justify-between px-2  items-sm">
                <span onClick={handleDeleteAccount} className="text-red-600 cursor-pointer">Delete Account</span>
                <span className="text-red-600 cursor-pointer">Sign out</span>
             </div>
             <p className="text-red-600 text-sm">{error && 'Something went wrong!'}</p>
             <p className="text-green-600 text-sm">{updateSuccess && 'User is Updated successfully!'}</p>

        </div>
    )
}