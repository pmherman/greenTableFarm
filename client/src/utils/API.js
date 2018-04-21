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
  }
};
