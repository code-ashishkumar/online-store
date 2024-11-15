import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAccountStore } from '../stores/accountDetails';
import Layout from './Layout';

function AccountDetails() {
  const [sortOrder, setSortOrder] = useState('Newest');
  const [activeTab, setActiveTab] = useState('Reviews');
  const { user, address, orders, updateUser, updateAddress } =
    useAccountStore();
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  // Framer Motion animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  // Handle form inputs
  const [userForm, setUserForm] = useState(user);
  const [addressForm, setAddressForm] = useState(address);

  const handleUserSubmit = () => {
    updateUser(userForm);
    setIsEditingUser(false);
  };

  const handleAddressSubmit = () => {
    updateAddress(addressForm);
    setIsEditingAddress(false);
  };

  return (
    <Layout>
      <div className="flex gap-4 border-b mb-6 overflow-x-auto">
        {['Personal Info', 'Orders'].map((tab) => (
          <button
            key={tab}
            className={`px-2 font-semibold whitespace-nowrap ${
              activeTab === tab
                ? 'border-b-2 border-black text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Personal Info' && (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-md">
          {/* User Info Section */}
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold mb-4">Account Information</h2>
            {isEditingUser ? (
              <div>
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={userForm.name}
                  onChange={(e) =>
                    setUserForm({ ...userForm, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="block w-full mb-2 p-2 border rounded"
                  value={userForm.email}
                  onChange={(e) =>
                    setUserForm({ ...userForm, email: e.target.value })
                  }
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={userForm.phone}
                  onChange={(e) =>
                    setUserForm({ ...userForm, phone: e.target.value })
                  }
                  placeholder="Phone"
                />
                <button
                  onClick={handleUserSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div>
                  <strong>Name:</strong> {user.name}
                </div>
                <div>
                  <strong>Email:</strong> {user.email}
                </div>
                <div>
                  <strong>Phone:</strong> {user.phone}
                </div>
                <button
                  onClick={() => setIsEditingUser(true)}
                  className="text-blue-500"
                >
                  Edit
                </button>
              </div>
            )}
          </motion.div>

          {/* Address Information */}
          <motion.div
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <h2 className="text-xl font-semibold mb-4">Address Information</h2>
            {isEditingAddress ? (
              <div>
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={addressForm.street}
                  onChange={(e) =>
                    setAddressForm({ ...addressForm, street: e.target.value })
                  }
                  placeholder="Street"
                />
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={addressForm.city}
                  onChange={(e) =>
                    setAddressForm({ ...addressForm, city: e.target.value })
                  }
                  placeholder="City"
                />
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={addressForm.state}
                  onChange={(e) =>
                    setAddressForm({ ...addressForm, state: e.target.value })
                  }
                  placeholder="State"
                />
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border rounded"
                  value={addressForm.postalCode}
                  onChange={(e) =>
                    setAddressForm({
                      ...addressForm,
                      postalCode: e.target.value,
                    })
                  }
                  placeholder="Postal Code"
                />
                <button
                  onClick={handleAddressSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <div>
                  <strong>Street:</strong> {address.street}
                </div>
                <div>
                  <strong>City:</strong> {address.city}
                </div>
                <div>
                  <strong>State:</strong> {address.state}
                </div>
                <div>
                  <strong>Postal Code:</strong> {address.postalCode}
                </div>
                <button
                  onClick={() => setIsEditingAddress(true)}
                  className="text-blue-500"
                >
                  Edit
                </button>
              </div>
            )}
          </motion.div>

          {/* Order History */}
        </div>
      )}

      {activeTab === 'Orders' && (
        <motion.div
          className="mb-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          {orders.length > 0 ? (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li key={order.id} className="p-4 bg-gray-100 rounded-md">
                  <div>
                    <strong>Order #:</strong> {order.id}
                  </div>
                  <div>
                    <strong>Date:</strong> {order.date}
                  </div>
                  <div>
                    <strong>Status:</strong> {order.status}
                  </div>
                  <div>
                    <strong>Total:</strong> ${order.total.toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders available.</p>
          )}
        </motion.div>
      )}
    </Layout>
  );
}

export default AccountDetails;
