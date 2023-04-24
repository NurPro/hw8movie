import React from "react";
 
const Modal = () => {
  return (
    <>
      <div id="backdrop"></div>
      <div>
        <div class="modal__content">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
          <label for="image-url">Image URL</label>
          <input type="text" name="image-url" id="image-url" />
          <label > Rating</label>
          <input
            type="number"
            step="1"
            max="5"
            min="1"
            name="rating"
            id="rating"
          />
        </div>
        <div class="modal__actions">
          <button class="btn btn--passive" id="cancel">
            Cancel
          </button>
          <button class="btn btn--success" id="add-movie">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
