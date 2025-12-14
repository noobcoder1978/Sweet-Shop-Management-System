import { useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
  const [sweet, setSweet] = useState({
    name: "", category: "", price: "", quantity: ""
  });

  const submit = async () => {
    await api.post("/api/sweets", sweet);
    alert("Sweet Added");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Sweet</h2>

      {Object.keys(sweet).map(key => (
        <input
          key={key}
          placeholder={key}
          className="w-full border p-2 mb-2"
          onChange={e => setSweet({ ...sweet, [key]: e.target.value })}
        />
      ))}

      <button
        onClick={submit}
        className="w-full bg-purple-600 text-white py-2 rounded">
        Add Sweet
      </button>
    </div>
  );
}
