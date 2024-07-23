import React from "react";
import "./Footer.css";
// Initialization for ES Users
import { Input, Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Input, Ripple });

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <p>&copy; 2023 My Company. All rights reserved.</p>
      {/* <div className="container row "> */}
      {/* <div className="container col-6 d-flex justify-content-center">
          <form>
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">
                Name
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2">
                Email address
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label class="form-label" for="form4Example3">
                Message
              </label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input
                class="form-check-input me-2"
                type="checkbox"
                value=""
                id="form4Example4"
                checked
              />
              <label class="form-check-label" for="form4Example4">
                Send me a copy of this message
              </label>
            </div>

            <button
              data-mdb-ripple-init
              type="button"
              class="btn btn-primary btn-block mb-4"
            >
              Send
            </button>
          </form>
        </div> */}
      <div className="container col-6 d-flex justify-content-center">
        <form>
          <div data-mdb-input-init class="form-outline mb-4">
            <input type="text" id="form4Example1" class="form-control" />
            <label class="form-label" for="form4Example1">
              Name
            </label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input type="email" id="form4Example2" class="form-control" />
            <label class="form-label" for="form4Example2">
              Email address
            </label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form4Example3"
              rows="4"
            ></textarea>
            <label class="form-label" for="form4Example3">
              Message
            </label>
          </div>

          <div class="form-check d-flex justify-content-center mb-4">
            <input
              class="form-check-input me-2"
              type="checkbox"
              value=""
              id="form4Example4"
              checked
            />
            <label class="form-check-label" for="form4Example4">
              Send me a copy of this message
            </label>
          </div>

          <button
            data-mdb-ripple-init
            type="button"
            class="btn btn-primary btn-block mb-4"
          >
            Send
          </button>
        </form>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
