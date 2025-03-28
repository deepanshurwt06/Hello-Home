import { useSelector } from "react-redux";
export default function Profile() {
    const {currentUser} = useSelector(state => state.user);
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-4xl font-semibold text-zinc-900 text-center  my-7">Profile</h1>
            <form className="flex flex-col gap-6">
                <img src={currentUser.user.profilePicture} alt="profile"  className="h-24 w-24 rounded-full self-center my-7"/>

                <input type="username" id="name"
                defaultValue={currentUser.user.username} placeholder="name" className="border-2 border-zinc-400 bg-zinc-300 rounded-lg p-3 outline-none"/>

                <input type="email" id="email" defaultValue={currentUser.user.email} placeholder="email" className="border-2 border-zinc-400 bg-zinc-300 rounded-lg p-3 outline-none"/>

                <input type="password" id="password" placeholder="password" className="border-2 border-zinc-400 bg-zinc-300 rounded-lg p-3 outline-none"/>

                <button className="p-3 bg-slate-700 text-white font-semibold uppercase rounded-lg hover:opacity-95 disabled:opacity-70">Update</button>

                <div className="flex justify-between mt-[-10px] px-1">
                    <span className="text-red-700 cursor-pointer">Delete Account</span>
                    <span className="text-red-700 cursor-pointer">Sign Out</span>
                </div>
            </form>
        </div>
    )
}