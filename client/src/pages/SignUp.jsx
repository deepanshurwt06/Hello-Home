import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart , signInFailure, signInSuccess } from "../redux/user/userSlice";
import { useDispatch , useSelector} from "react-redux";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
    

      if (data.error) {
        dispatch(signInFailure(data.error));
        return;
      }
     dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
     dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 text-center">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          onChange={handleChange}
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="email"
          placeholder="example@email.com"
          name="email"
        />
        <input
          onChange={handleChange}
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="password"
          placeholder="password"
          name="password"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg     font-semibold uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 py-3 justify-center">
        <p className="font-medium">Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 font-semibold">Sign in</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? error.message || "Something went wrong" : ""}</p>
    </div>
  );
}
