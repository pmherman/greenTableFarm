import axios from "axios";

export default {
  // Gets all thumbnails
  getThumbnails: function() {
    return axios.get("/api/thumbnail");
  },
  // Gets the thumbnail with the given id
  getThumbnail: function(id) {
    return axios.get("/api/thumbnail/" + id);
  },
  // Deletes the thumbnail with the given id
  deleteThumbnail: function(id) {
    return axios.delete("/api/thumbnail/" + id);
  },
  // Saves a thumbnail to the database
  saveThumbnail: function(thumbnailData) {
    return axios.post("/api/thumbnail", thumbnailData);
  },
  // Update a thumbnail to the database
  updateThumbnail: function(id, thumbnailData) {
    return axios.put("/api/thumbnail/" + id, thumbnailData)
  },
    // Information for second Admin Page Routes
    // Gets all cafes
    getCafes: function() {
      return axios.get("/api/cafe");
    },
    getCafe: function(id) {
      return axios.get("/api/cafe/" + id);
    },
    // Deletes the thumbnail with the given id
    deleteCafe: function(id) {
      return axios.delete("/api/cafe/" + id);
    },
    // Saves a thumbnail to the database
    saveCafe: function(cafeData) {
      return axios.post("/api/cafe", cafeData);
    },
    // Update a thumbnail to the database
    updateCafe: function(id, cafeData) {
      return axios.put("/api/cafe/" + id, cafeData)
    }
  };
