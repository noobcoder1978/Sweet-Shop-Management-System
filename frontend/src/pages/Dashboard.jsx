import { useEffect, useState } from "react";
import api from "../api/axios";
import SweetCard from "../components/SweetCard";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    api.get("/api/sweets").then(res => setSweets(res.data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {sweets.map(s => <SweetCard key={s.id} sweet={s} />)}
    </div>
  );
}
