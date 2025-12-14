import api from "../api/axios";

export default function SweetCard({ sweet }) {

  const purchase = async () => {
    await api.post(`/api/sweets/${sweet.id}/purchase`);
    window.location.reload();
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{sweet.name}</h3>
      <p>Category: {sweet.category}</p>
      <p>Price: ₹{sweet.price}</p>
      <p>Stock: {sweet.quantity}</p>

      <button
        onClick={purchase}
        disabled={sweet.quantity === 0}
        className="mt-3 w-full bg-green-600 text-white py-1 rounded disabled:bg-gray-400"
      >
        Purchase
      </button>
    </div>
  );
}
