import axios from "axios";

const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "doctorapp");
  // uploadData.append("api_key", "285487412689241");
  // Add any additional parameters as needed
  // console.log( uploadData.append("file", file));

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/drhbfbxr4/image/upload",
      uploadData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("shavaiz");
    const { secure_url } = res.data;
    console.log("secure", secure_url);
    return secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error; // Rethrow the error to handle it at a higher level if needed
  }
};

export default uploadImageToCloudinary;
