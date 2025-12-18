import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/");
      const jsonData = await response.data.users.data;
      console.log(jsonData);
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold tracking-tight mb-6">
          User Profile
        </h1>
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-neutral-900/80 border border-neutral-800 rounded-2xl shadow-[0_22px_50px_rgba(0,0,0,0.85)] p-6 space-y-3 backdrop-blur"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xl font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-neutral-400">
                  @{user.username}
                </p>
              </div>
            </div>
            <div className="pt-2 space-y-1.5 text-sm">
              <p>
                <span className="text-neutral-500">Email</span>
                <br />
                <span className="font-medium text-neutral-100">
                  {user.email}
                </span>
              </p>
              <p>
                <span className="text-neutral-500">Phone</span>
                <br />
                <span className="font-medium text-neutral-100">
                  {user.phone}
                </span>
              </p>
              <p>
                <span className="text-neutral-500">
                  Address
                </span>
                <br />
                <span className="font-medium text-neutral-100">
                  {user.address}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
