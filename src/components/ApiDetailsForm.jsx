import React, { useState } from "react";

const ApiDetailsForm = () => {
  const [formValues, setFormValues] = useState({
    imagePreviewUrl: "",
    imageFile: null,
    apiName: "",
    description: "",
    price: "",
    walletAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new object with form data
    const newApiDetail = {
      imagePreviewUrl: formValues.imagePreviewUrl,
      imageFile: formValues.imageFile,
      apiName: formValues.apiName,
      description: formValues.description,
      price: formValues.price,
      walletAddress: formValues.walletAddress,
    };

    // Do something with the newApiDetail object (e.g., send it to a server)
    console.log("Form Data:", newApiDetail);
    // Reset form inputs after submission
    setFormValues({
      imagePreviewUrl: "",
      imageFile: null,
      apiName: "",
      description: "",
      price: "",
      walletAddress: "",
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Update the formValues state with the selected file and image preview
    setFormValues({
      ...formValues,
      imageFile: file,
      imagePreviewUrl: URL.createObjectURL(file),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Register Your API</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ textAlign: "center" }}>Upload Image Here:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {formValues.imagePreviewUrl && (
            <div className="image-preview-container">
              <img
                src={formValues.imagePreviewUrl}
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
            name="apiName"
            value={formValues.apiName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Wallet Address:</label>
          <input
            type="text"
            name="walletAddress"
            value={formValues.walletAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Your API</button>
      </form>
    </div>
  );
};

export default ApiDetailsForm;
