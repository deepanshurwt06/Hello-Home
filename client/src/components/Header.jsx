import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <div className="bg-slate-400">
      <div className=" flex justify-between items-center max-w-7xl mx-auto py-3 px-5">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold ">Auth App</h1>
        </Link>
        <ul className="flex gap-7">
          <Link to={"/"}>
            <li className="font-medium">Home</li>
          </Link>

          <Link to={"/about"}>
            {" "}
            <li className="font-medium">About</li>
          </Link>

          <Link to={"/profile"}>
          {currentUser ? (
            <img src={currentUser.profilePicture} alt="profile" className="h-8 w-8 rounded-full object-cover" />
          ):(
            <li className="font-medium">Sign in</li>
          )}        
          </Link>
        </ul>
      </div>
    </div>
  );
}
