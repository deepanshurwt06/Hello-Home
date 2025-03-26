import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-slate-400">
            <div className=" flex justify-between items-center max-w-[100rem] mx-auto py-2">
                <Link to={'/'}>
                <h1 className="text-3xl font-bold ">Auth App</h1>
                </Link>
                <ul className="flex gap-5">
                    <Link to={'/'}><li className="font-medium">Home</li></Link>
                    
                    <Link to={'/about'}> <li className="font-medium">About</li></Link>
                   
                    <Link to={'/sign-in'}><li className="font-medium">Sign in</li></Link>
                    
                </ul>
            </div>
        </div>
    )
}