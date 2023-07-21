import React, { useState } from "react";

const ApiDetailsForm = () => {
  // State variables to store form input values and list of API details
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [apiName, setApiName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new object with form data
    const newApiDetail = {
      imageName,
      apiName,
      description,
      price,
      walletAddress,
    };

    // Reset form inputs after submission

    setApiName("");
    setDescription("");
    setPrice("");
    setWalletAddress("");
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    // Image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <h1>Register Your API</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ textAlign: "center" }}>Upload Image Here:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreviewUrl && (
            <div className="image-preview-container">
              <img
                src={imagePreviewUrl}
                alt="Preview"
                className="image-preview"
                width="150"
              />
            </div>
          )}
        </div>
        <div>
          <label>API Name:</label>
          <input
            type="text"
            value={apiName}
            onChange={(e) => setApiName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Wallet Address:</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Your API</button>
      </form>
    </div>
  );
};

export default ApiDetailsForm;
