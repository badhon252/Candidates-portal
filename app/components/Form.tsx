import React, { useState, useEffect } from "react";

export interface FormData {
  name: string;
  email: string;
  occupation: string;
}

interface FormProps {
  defaultValues?: FormData | null;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({
  defaultValues = null,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    occupation: "",
  });

  useEffect(() => {
    if (defaultValues) {
      setFormData(defaultValues);
    }
  }, [defaultValues]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", occupation: "" }); // Reset form fields after submission
  };

  const handleCancel = (): void => {
    setFormData({ name: "", email: "", occupation: "" });
    onCancel();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mx-auto flex-col  xsm:w-1/2 w-80"
    >
      <input
        type="text"
        name="name"
        className="bg-gray-300 my-3 text-gray-900 rounded-md py-3 px-2"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        className="bg-gray-300 my-3 py-3 px-2 text-gray-900 rounded-md"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="occupation"
        className="bg-gray-300 my-3 py-3 px-2 text-gray-900 rounded-md"
        value={formData.occupation}
        onChange={handleInputChange}
        placeholder="Occupation"
        required
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-green-400 my-3 py-3 px-2 text-gray-900 rounded-md"
        >
          Submit
        </button>
        {onCancel !== null && (
          <button
            type="button"
            className="bg-gray-400 my-3 py-3 px-2 text-gray-900 rounded-md ml-3"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
