export default function SignUp() {
  return (
    <div className="p-5 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 text-center">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="email"
          placeholder="example@email.com"
          name="email"
        />
        <input
          className="border bg-white border-zinc-300 p-3 rounded-lg "
          type="password"
          placeholder="password"
          name="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg     font-semibold uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex gap-2 py-3 justify-center">
        <p className="font-medium">Have an account?</p>

        <span className="text-blue-700 font-semibold">Sign in</span>
      </div>
    </div>
  );
}
