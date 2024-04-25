import React, { useState } from "react";

const CreateBankDetailsForm = ({ onSubmit }) => {
  const [bankData, setBankData] = useState({
    ifscCode: "",
    accountNumber: "",
    bankName: "",
    preferredCurrency: "",
    accountHolderName: "",
    bankBranch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankData({
      ...bankData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bankData);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Bank Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="ifscCode" className="block mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            name="ifscCode"
            value={bankData.ifscCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="accountNumber" className="block mb-1">
            Account Number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={bankData.accountNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="bankName" className="block mb-1">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={bankData.bankName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="preferredCurrency" className="block mb-1">
            Preferred Currency
          </label>
          <input
            type="text"
            id="preferredCurrency"
            name="preferredCurrency"
            value={bankData.preferredCurrency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="accountHolderName" className="block mb-1">
            Account Holder Name
          </label>
          <input
            type="text"
            id="accountHolderName"
            name="accountHolderName"
            value={bankData.accountHolderName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <div>
          <label htmlFor="bankBranch" className="block mb-1">
            Bank Branch
          </label>
          <input
            type="text"
            id="bankBranch"
            name="bankBranch"
            value={bankData.bankBranch}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Bank Details
        </button>
      </form>
    </div>
  );
};

export default CreateBankDetailsForm;
