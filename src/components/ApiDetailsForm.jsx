import React, { useState, useEffect } from "react";
import Listapi from "../DummyData/ListApi.json";
import { useAccount } from "wagmi";
import { Web3Storage } from "web3.storage";
import { ethers } from "ethers";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMyMzFjMGYyN2QzZDQyYTE1MjI1MzQwNDMxYzhhODYzQzU1ODQ2NmEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTAyODQ5OTUwMTUsIm5hbWUiOiJkZW1vIn0.0qw-IwIKcEtq1WSqxcgdkv3qpZZpIpgBKOiCgeqLV2E",
});

const contractAddress = "0x09905C1E44D4FC4DA1c366C92D189E5878D56B71"; // Replace with your actual contract address

const ApiDetailsForm = () => {
  const [imageCid, setImageCid] = useState();
  const [formValues, setFormValues] = useState({
    imagePreviewUrl: "",
    imageFile: null,
    apiName: "",
    description: "",
    price: "",
    walletAddress: "",
  });
  const { address } = useAccount();
  const mainAddress = address;
  console.log(mainAddress);

  useEffect(() => {
    if (formValues.imageFile) {
      imageUpload();
    }
  }, [formValues.imageFile]);

  const getContract = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        throw new Error("Metamask is not installed, please install!");
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const network = await provider.getNetwork();
      const { chainId } = network;

      console.log("Connected Chain ID:", chainId);

      if (chainId === 44787) {
        console.log("Connected to the correct BTTC Network!");
        const contract = new ethers.Contract(
          contractAddress,
          Listapi.abi,
          signer
        );
        return contract;
      } else {
        throw new Error("Please connect to the BTTC Network (chain ID 44787)!");
      }
    } catch (error) {
      console.error("Error while getting the contract:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contract = await getContract();
      if (!imageCid) {
        console.error("Error: Image CID is not available.");
        return;
      }

      // Manually set gas limit and gas price
      const gasLimit = 3000000; // Adjust this value based on your contract's gas consumption
      const gasPrice = ethers.utils.parseUnits("100", "gwei"); // Set the gas price in gwei

      const tx = await contract.addAPI(
        formValues.apiName.toString(),
        formValues.description.toString(),
        formValues.price.toString(),
        mainAddress,
        imageCid.toString(),
        { gasLimit: 300000 } // Use the CID obtained from imageUpload
      );

      // Wait for the transaction to be mined
      const receipt = await tx.wait();

      console.log("Transaction Receipt:", receipt);
      console.log("API added successfully!");
    } catch (error) {
      console.error("Error adding API:", error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
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

  const imageUpload = async () => {
    try {
      const fileInput = document.querySelector('input[type="file"]');
      const rootCid = await client.put(fileInput.files, {
        name: "logo_image",
        maxRetries: 3,
      });

      const res = await client.get(rootCid);
      const files = await res.arrayBuffer(); // Use arrayBuffer to get the files
      const cidString = rootCid.toString();
      setImageCid(cidString);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
          <label>API Documentation file:</label>
          <input
            type="text"
            name="walletAddress"
            value={formValues.walletAddress}
            onChange={handleChange}
            placeholder="swagger url"
            required
          />
        </div>
        <button type="submit">Submit Your API</button>
      </form>
    </div>
  );
};

export default ApiDetailsForm;
