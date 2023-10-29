import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import LoginOpenPanel from "../checkout/LoginPanel";
import ClassicButton from "../button/ClassicButton";
import SingleProduct from "../cart/SingleProduct";
import PaymentOptions from "./PaymentOptions";
const checkoutSections = [
  { id: 1, title: "LOGIN" },
  { id: 2, title: "DELIVERY ADDRESS" },
  { id: 3, title: "ORDER SUMMARY" },
  { id: 4, title: "PAYMENT OPTIONS" },
];
const CheckoutLeftContainer = () => {
  const [panel1, setPanel1] = useState(true);
  const [panel2, setPanel2] = useState(false);
  const [panel3, setPanel3] = useState(false);
  const [panel4, setPanel4] = useState(false);

  //   useEffect(() => {}, []);
  const OpenPanel1 = () => {
    setPanel1(true);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
  };
  const OpenPanel2 = () => {
    setPanel1(false);
    setPanel2(true);
    setPanel3(false);
    setPanel4(false);
  };
  const OpenPanel3 = () => {
    setPanel1(false);
    setPanel2(false);
    setPanel3(true);
    setPanel4(false);
  };
  const OpenPanel4 = () => {
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel4(true);
  };
  return (
    <div className="w-8/12 border space-y-3 ">
      {/* panel 1  LOGIN*/}
      {panel1 ? (
        <LoginOpenPanel OpenPanel2={OpenPanel2} />
      ) : (
        <div className="rounded-sm w-full p-2 bg-white flex items-center">
          <div className="h-5 w-5 bg-gray-200 flex justify-center items-center p-3">
            1
          </div>
          <div>
            <p className="ml-5 text-lg font-medium text-gray-400">LOGIN</p>
          </div>
          <button
            onClick={OpenPanel1}
            className="ml-auto border px-8 py-2 rounded-sm flipkart-blue"
          >
            CHANGE
          </button>
        </div>
      )}
      {/* panel 2 ADDRESS*/}
      {panel2 ? (
        <AddressOpenPanel OpenPanel3={OpenPanel3} />
      ) : (
        <div className="rounded-sm w-full p-2 bg-white flex items-center">
          <div className="h-5 w-5 bg-gray-200 flex justify-center items-center p-3">
            2
          </div>
          <div>
            <p className="ml-5 text-lg font-medium text-gray-400">
              DELIVERY ADDRESS
            </p>
          </div>
          <button
            onClick={OpenPanel2}
            className="ml-auto border px-8 py-2 rounded-sm flipkart-blue"
          >
            CHANGE
          </button>
        </div>
      )}

      {/* panel 3 ORDER SUMMARY*/}
      {panel3 ? (
        <OrderSummaryOpenPanel OpenPanel4={OpenPanel4} />
      ) : (
        <div className="rounded-sm w-full p-2 bg-white flex items-center">
          <div className="h-5 w-5 bg-gray-200 flex justify-center items-center p-3">
            3
          </div>
          <div>
            <p className="ml-5 text-lg font-medium text-gray-400">
              ORDER SUMMARY
            </p>
          </div>
          <button
            onClick={OpenPanel3}
            className="ml-auto border px-8 py-2 rounded-sm flipkart-blue"
          >
            CHANGE
          </button>
        </div>
      )}

      {/* panel 4 PAYMENT OPTIONS*/}
      {panel4 ? (
        <PaymentOptionsOpenPanel />
      ) : (
        <div className="rounded-sm w-full p-2 bg-white flex items-center">
          <div className="h-5 w-5 bg-gray-200 flex justify-center items-center p-3">
            4
          </div>
          <div>
            <p className="ml-5 text-lg font-medium text-gray-400">
              PAYMENT OPTIONS
            </p>
          </div>
          <button className="ml-auto border px-8 py-2 rounded-sm flipkart-blue">
            CHANGE
          </button>
        </div>
      )}
    </div>
  );
};

const AddressOpenPanel = ({ OpenPanel3 }) => {
  return (
    <div>
      <div className="rounded-sm w-full p-2 bg-flipkart flex items-center">
        <div className="h-5 w-5 bg-white flex justify-center items-center p-3">
          1
        </div>
        <div>
          <p className="ml-5 text-lg font-medium text-white">
            DELIVERY ADDRESS
          </p>
        </div>
        {/* <button className="ml-auto border px-8 py-2 rounded-sm flipkart-blue bg-white">
          CHANGE
        </button> */}
      </div>
      <div className="w-full p-5 bg-white space-y-4">
        <p className="flipkart-blue">EDIT ADDRESS</p>
        <div className="cursor-pointer  px-4 py-4 rounded-sm bg-flipkart w-fit text-white flex items-center space-x-3 text-sm">
          <Icon icon="ic:outline-gps-fixed" color="#fff" fontSize={20} />

          <span> Use My Current Location</span>
        </div>
        <div fullWidth className="w-9/12 space-y-4" action="">
          <div className="flex space-x-4">
            {" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="Name"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />{" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="10-digit Mobile Number"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </div>
          <div className="flex space-x-4">
            {" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="Name"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />{" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="10-digit Mobile Number"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </div>
          <TextField
            className="w-full"
            id="outlined-multiline-static"
            label="Address (Area and Street)"
            multiline
            rows={2}
            defaultValue="Default Value"
          />
          <div className="flex space-x-4">
            {" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="Name"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />{" "}
            <FormControl className="w-1/2">
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={""}
                label="Age"
                className="w-full"
                size="small"
                // onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
          </div>
          <div className="flex space-x-4">
            {" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="Name"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />{" "}
            <TextField
              className="w-1/2"
              // error
              size="small"
              id="outlined-error-helper-text"
              label="10-digit Mobile Number"
              required
              // defaultValue="Hello World"
              // helperText="Incorrect entry."
            />
          </div>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Address Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="Home"
                control={<Radio size="small" />}
                label="Home (All day delivery)"
              />
              <FormControlLabel
                value="Work"
                control={<Radio size="small" />}
                label="Work (Delivery between 10 AM - 5 PM)"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex space-x-6">
          <ClassicButton text={"SAVE AND DELIVER"} onClick={OpenPanel3} />
          <button className="flipkart-blue text-sm">CANCEL</button>
        </div>
      </div>
      <div className="flex items-center bg-white border p-5 cursor-pointer space-x-5">
        <Icon icon="ic:outline-plus" color="#2f75f0" />
        <span className="flipkart-blue text-sm">Add a new Address</span>
      </div>
    </div>
  );
};
const OrderSummaryOpenPanel = ({ OpenPanel4 }) => {
  return (
    <div className="bg-white">
      <div className="rounded-sm w-full p-2 bg-flipkart bg-white flex items-center">
        <div className="h-5 w-5 bg-white flex justify-center items-center p-3">
          3
        </div>
        <div>
          <p className="ml-5 text-lg font-medium text-white">ORDER SUMMARY</p>
        </div>
        {/* <button className="ml-auto border px-8 py-2 rounded-sm flipkart-blue bg-white">
          CHANGE
        </button> */}
      </div>
      <div className="bg-white w-full p-5">
        <p className="font-medium">
          You can continue to place order with following available items.
        </p>
        <SingleProduct checkout={true} style={`border-none`} />
        <SingleProduct checkout={true} style={`border-none`} />
      </div>
      <div className="bg-white p-5 flex justify-end border">
        <ClassicButton onClick={OpenPanel4} text={"CONTINUE"} />
      </div>
    </div>
  );
};
const PaymentOptionsOpenPanel = () => {
  return (
    <div>
      <div className="rounded-sm w-full p-2 bg-flipkart bg-white flex items-center">
        <div className="h-5 w-5 bg-white  flex justify-center items-center p-3">
          4
        </div>
        <div>
          <p className="ml-5 text-lg font-medium text-white">PAYMENT OPTIONS</p>
        </div>
        {/* <button className="ml-auto border px-8 py-2 rounded-sm flipkart-blue bg-white">
        CHANGE
      </button> */}
      </div>
      <PaymentOptions />
    </div>
  );
};

export default CheckoutLeftContainer;
