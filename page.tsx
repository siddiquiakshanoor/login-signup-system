export default function Login() {
return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <form className="flex flex-col gap-4 w-64">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="Password" className="border p-2 rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
    </form>
    </div>
);
}
