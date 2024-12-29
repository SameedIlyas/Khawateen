import { X, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { items, removeItem } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Checkout complete!");
    navigate('/marketplace');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl rounded-l-lg overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold text-teal-700">Shopping Cart</h2>
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-grow p-8">
              <ShoppingBag size={48} className="text-gray-400 mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-grow overflow-y-auto p-4">
                {items.map((item) => (
                  <div key={item._id} className="flex items-center mb-4 p-2 border rounded-lg hover:bg-teal-50">
                    <img
                      src={item.image ? `data:image/jpeg;base64,${item.image}` : '/path/to/default/image.jpg'}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium text-teal-600">{item.title}</h3>
                      <p className="text-teal-600">Rs. {item.price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t p-4">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">Rs. {total}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
