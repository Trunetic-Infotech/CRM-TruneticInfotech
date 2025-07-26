import React, { useRef } from "react";
import { FaUpload } from "react-icons/fa";
import Profile from "../../../assets/Profile.jpg";
import { Save } from "lucide-react";
import { Upload } from "lucide-react";

const AddEmployee = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="flex flex-col items-start gap-5">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pl-7 md:pl-0">
            Add New Employee
          </p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-md pl-7 md:pl-0">
            Enter employee details to add to the system
          </p>
        </div>
      </div>

      <div className=" w-full flex items-center justify-center">
        <div className="bg-white w-[95%]  rounded-xl flex flex-col gap-4 shadow-md p-4">
          <div>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">
              Profile Picture
            </p>
          </div>

          <div className="flex gap-10">
            <img
              src={Profile}
              alt=""
              className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            />

            <div className="flex flex-col  justify-center">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                name=""
                id=""
              />
              {/* Styled button */}
              <button
                type="button"
                onClick={handleButtonClick}
                className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Picture
              </button>
              <p className="text-xs sm:text-base">
                Recommended: Square image, at least 200x200px. Max file size:
                5MB.
              </p>
            </div>
          </div>
          <hr className="border-t border-2 border-gray-300 my-4" />
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                Personal Information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Full Name"
                  className="border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Phone Number"
                  className="border-2 border-gray-200 p-2 rounded-md "
                />
              </div>
            </div>
          </div>

          <hr className="border-t border-2 border-gray-300 my-4" />

          <div className="flex flex-col gap-5">
            <div>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                Employment Information{" "}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Department*
                </label>
                <select
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-md"
                >
                  <option value="">Select Department</option>
                </select>
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Position*
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Job Position"
                  className="border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Employment Type*
                </label>
                <select
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-md"
                >
                  <option value="">Select Employee Type</option>
                </select>
              </div>

              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Joining Date*
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Salary (Optional)
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Job Position"
                  className="border-2 border-gray-200 p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col  gap-2">
                <label htmlFor="" className="font-medium">
                  Status*
                </label>
                <select
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-md"
                >
                  <option value="">Active</option>
                  <option value="">InActive</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-t border-2 border-gray-300 my-4" />
          <div className="flex justify-end w-full">
            <div className="flex gap-5">
              <button className="border-2 border-gray-200 px-5 py-2 rounded-xl text-lg">
                Cancel
              </button>
              <button className="bg-blue-600 flex px-5 py-2 rounded-xl items-center gap-2 text-white">
                <Save className="w-6 h-6 text-white" />
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
