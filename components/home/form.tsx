/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the form data interface
interface FormData {
  service: string;
  name: string;
  phone: string;
  agree: boolean;
}

// Define the props interface for the SimpleForm component
interface SimpleFormProps {
  onSubmit: (data: FormData) => void;
}

// SimpleForm component
const SimpleForm: React.FC<SimpleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    service: "",
    name: "",
    phone: "",
    agree: false,
  });

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ service: "", name: "", phone: "", agree: false }); // Clear form fields
  };

  // Phone validation regex
  const phoneRegex = /^\d{10}$/;

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service Offered (Example: Dog Walking)"
          className="block w-full rounded-md border-gray-300 border-opacity-50 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-transparent text-white"
          title="Please enter your business's services or industry (Example: Limousine Service)"
          required
          style={{ fontSize: "12px" }}
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="block w-full rounded-md border-gray-300 border-opacity-50 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-transparent text-white"
          required
          style={{ fontSize: "12px" }}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="block w-full rounded-md border-gray-300 border-opacity-50 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-transparent text-white"
          pattern={phoneRegex.source}
          title="Please enter a valid 10-digit phone number"
          required
          style={{ fontSize: "12px" }}
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-white">I agree to the terms and conditions</span>
        </label>
        <button
          type="submit"
          className="w-full bg-white hover:bg-gray-200 text-black font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Start Conversation
        </button>
      </form>
    </>
  );
};

// useClient hook
async function useClient(connectionId: string, providerConfigKey: string) {
  try {
    const secretKey = process.env.NEXT_PUBLIC_NANGO_SECRET_KEY_PROD!;
    const response = await fetch(`https://api.nango.dev/connection/${connectionId}?provider_config_key=${providerConfigKey}&force_refresh=false&refresh_token=false`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch connection credentials.");
    }

    const data = await response.json();
    const token = data.credentials?.raw?.access_token;
    return token;
  } catch (error) {
    console.error("Error connecting to Nango:", error);
    return null;
  }
}

// SimpleFormWrapper component
const SimpleFormWrapper: React.FC = () => {
  const handleSubmit = async (formData: FormData) => {
    // Make API request here using formData
    try {
      const fetchedToken = await useClient("4046b242-247d-428b-b63a-752ec6a322d8", "highlevel");
      if (!fetchedToken) {
        throw new Error("Error: Token not available");
      }

      const response = await fetch("https://services.leadconnectorhq.com/contacts/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${fetchedToken}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          locationId: "EYXkvdTcNpEqPuJar8Iu",
          source: "Demo", // Add logic if needed
          customFields: [
            {
              id: "TUxf3OrZT75d8jKH70Ym",
              field_value: formData.service,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data.");
      }

      console.log("Form data submitted successfully!");
      toast.success("Form submitted successfully!"); // Show success toast
    } catch (error) {
      console.error("Error submitting form data:", error);
      toast.error("Failed to submit form data. Please try again."); // Show error toast
    }
  };

  return (
    <>
      <ToastContainer />
      <SimpleForm onSubmit={handleSubmit} />
    </>
  );
};

export default SimpleFormWrapper;
