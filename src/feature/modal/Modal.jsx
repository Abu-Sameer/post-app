import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../AllSlices/PostSlice';

export default function Modal({ post }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Remove Post
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-dark" id="staticBackdropLabel">
                Are sure you want to remove this post...?
              </h4>
            </div>
            <div className="card-footer text-center pb-3">
              <button
                onClick={() => dispatch(removePost(post))}
                type="button"
                className="btn btn-outline-danger me-3"
                data-bs-dismiss="modal"
              >
                Confirm
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-outline-dark ms-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
