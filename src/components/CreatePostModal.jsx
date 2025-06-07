import React, { useState } from "react";

function CreatePostModal({ isOpen, onClose, onCreate }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ description, image });
    setDescription("");
    setImage(null);
  };

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h4 className="modal-title">Create Post</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="postImageInput">Image</label>
            <input
              type="file"
              className="form-control"
              id="postImageInput"
              name="postImageInput"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="postDescriptionInput">Description</label>
            <textarea
              className="form-control"
              id="postDescriptionInput"
              name="postDescriptionInput"
              rows="3"
              required
              minLength={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePostModal;
