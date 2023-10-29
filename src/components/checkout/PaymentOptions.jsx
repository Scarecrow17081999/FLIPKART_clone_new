import React, { useEffect, useState } from "react";
import phonePeIcon from "../../assets/phonepe--icon.svg";
import bhimUPI from "../../assets/bhim-upi.svg";
import wallet from "../../assets/wallet.png";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";
import ClassicButton from "../button/ClassicButton";
import Radio from "@mui/joy/Radio";
import ClassicInput from "../input/ClassicInput";
import { capchaLink } from "../../../data.json";
import { Icon } from "@iconify/react";
const PaymentOptions = () => {
  //   console.log(capchaLink);
  const [panel1, setPanel1] = useState(false);
  const [panel2, setPanel2] = useState(false);
  const [panel3, setPanel3] = useState(false);
  const [panel4, setPanel4] = useState(false);
  const [panel5, setPanel5] = useState(false);
  const [panel6, setPanel6] = useState(false);
  const [panel7, setPanel7] = useState(false);
  const [selectedValue, setSelectedValue] = useState("a");
  useEffect(() => {
    setPanel1(true);
  }, []);
  const handlePanel1 = () => {
    setPanel1(true);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
    setPanel5(false);
    setPanel6(false);
    setPanel7(false);
  };
  const handlePanel2 = () => {
    setPanel2(true);
    setPanel1(false);
    setPanel3(false);
    setPanel4(false);
    setPanel5(false);
    setPanel6(false);
    setPanel7(false);
  };
  const handlePanel3 = () => {
    setPanel3(true);
    setPanel1(false);
    setPanel2(false);
    setPanel4(false);
    setPanel5(false);
    setPanel6(false);
    setPanel7(false);
  };
  const handlePanel4 = () => {
    setPanel4(true);
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel5(false);
    setPanel6(false);
    setPanel7(false);
  };
  const handlePanel5 = () => {
    setPanel5(true);
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
    setPanel6(false);
    setPanel7(false);
  };
  const handlePanel6 = () => {
    setPanel6(true);
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
    setPanel5(false);
    setPanel7(false);
  };
  const handlePanel7 = () => {
    setPanel7(true);
    setPanel1(false);
    setPanel2(false);
    setPanel3(false);
    setPanel4(false);
    setPanel5(false);
    setPanel6(false);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="w-full min-h-20 flex flex-col space-y-2">
      {panel1 ? (
        <OpenPanel1 />
      ) : (
        <div
          onClick={handlePanel1}
          className="w-full flex items-center bg-white p-5 space-x-3 cursor-pointer"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <img src={phonePeIcon} alt="" className="w-6" />
          <p className=" text-sm">Phonepe UPI</p>
        </div>
      )}
      {panel2 ? (
        <OpenPanel2 />
      ) : (
        <div
          onClick={handlePanel2}
          className="w-full flex items-center bg-white p-5 space-x-3 cursor-pointer"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <img src={bhimUPI} alt="" className="w-6" />
          <div className="">
            <p className="text-sm">Pay By UPI</p>
            <p className="text-sm text-gray-500">Pay by any UPI app</p>
          </div>
        </div>
      )}
      {panel3 ? (
        <OpenPanel3 />
      ) : (
        <div
          onClick={handlePanel3}
          className="cursor-pointer w-full flex items-center bg-white p-5 space-x-3"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="c"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <img src={wallet} alt="" className="w-6" />
          <div className="">
            <p className="text-sm">Wallets</p>
          </div>
        </div>
      )}
      {panel4 ? (
        <OpenPanel4 />
      ) : (
        <div
          onClick={handlePanel4}
          className="cursor-pointer w-full flex items-center bg-white p-5 space-x-3"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="d"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <div className="">
            <p className="text-sm">Credit / Debit / ATM Card</p>
            <p className="text-sm text-gray-500">
              Add and secure your card as per RBI guidelines
            </p>
          </div>
        </div>
      )}
      {panel5 ? (
        <OpenPanel5 />
      ) : (
        <div
          onClick={handlePanel5}
          className="cursor-pointer w-full flex items-center bg-white p-5 space-x-3"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="e"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <div className="">
            <p className="text-sm">Net Banking</p>
            <p className="text-sm text-gray-500">
              This instrument has low success, use UPI or cards for better
              experience
            </p>
          </div>
        </div>
      )}
      {panel6 ? (
        <OpenPanel6 />
      ) : (
        <div
          onClick={handlePanel6}
          className="cursor-pointer w-full flex items-center bg-white p-5 space-x-3"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="f"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <div className="">
            <p className="text-sm">EMI (Easy Installments)</p>
          </div>
        </div>
      )}
      {panel7 ? (
        <OpenPanel7 />
      ) : (
        <div
          onClick={handlePanel7}
          className="cursor-pointer w-full flex items-center bg-white p-5 space-x-3"
        >
          <Radio
            checked={false}
            onChange={handleChange}
            value="g"
            name="radio-buttons"
            slotProps={{ input: { "aria-label": "A" } }}
          />
          <div className="">
            <p className="text-sm">Cash on Delivery</p>
          </div>
        </div>
      )}
    </div>
  );
};

const OpenPanel1 = () => {
  return (
    <div className="w-full flex flex-col bg-blue-100 p-5 space-y-2 ">
      <div className="flex items-center space-x-3">
        {" "}
        <Radio
          checked={true}
          // onChange={handleChange}
          value="a"
          //   label="lol"
          name="radio-buttons"
          //   size="small"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <img src={phonePeIcon} alt="" className="w-6" />
        <p className=" text-sm">Phonepe UPI</p>
      </div>
      <ClassicButton style={"w-40 ml-16"} text={"CONTINUE"} />
    </div>
  );
};
const OpenPanel2 = () => {
  const [phonePe, setPhonePe] = useState(false);
  const [bhimUPI, setBhimUPI] = useState(false);
  const handlePanel1 = () => {
    setPhonePe(true);
    setBhimUPI(false);
  };
  const handlePanel2 = (event) => {
    setPhonePe(false);
    setBhimUPI(true);
  };
  return (
    <div className="w-full flex flex-col bg-blue-100 bg-white p-5 space-y-2">
      <div className="flex items-center space-x-3">
        {" "}
        <Radio
          checked={true}
          value="b"
          name="radio-buttons"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <img src={bhimUPI} alt="" className="w-6" />
        <div className="">
          <p className="text-sm">Pay By UPI</p>
          <p className="text-sm text-gray-500">Pay by any UPI app</p>
        </div>
      </div>
      <div className="ml-20">
        <p className="text-sm "></p>
        <FormControl className="space-y-2 w-full">
          <FormLabel>Choose an Option</FormLabel>
          <RadioGroup
            defaultValue="outlined"
            name="radio-buttons-group"
            className="space-y-4"
          >
            <Radio
              onClick={handlePanel1}
              value="outlined"
              label="Phone Pe"
              variant="outlined"
              checked={phonePe}
            />
            {phonePe && (
              <ClassicButton style={"ml-7 w-fit"} text={"CONTINUE"} />
            )}
            <Radio
              onClick={handlePanel2}
              value="outlined"
              label="Your UPI ID"
              variant="outlined"
              checked={bhimUPI}
            />
            {bhimUPI && (
              <ClassicButton style={"ml-7 w-fit w-40"} text={"CONTINUE"} />
            )}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};
const OpenPanel3 = () => {
  return (
    <div className="w-full min-h-20 bg-blue-100 p-5 space-y-3">
      <div className="flex space-x-3 items-center">
        {" "}
        <Radio
          checked={true}
          // onChange={handleChange}
          value="c"
          name="radio-buttons"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <img src={wallet} alt="" className="w-6" />
        <p className="text-sm">Patym Wallet</p>
      </div>
      <div className="flex space-x-3 ml-16">
        <form className="bg-white w-fit flex flex-col p-2 rounded-sm  border border-blue-400 ">
          <label className="text-xs" htmlFor="wallet-number">
            Enter Patym Wallet Linked Number
          </label>
          <input
            className=" border border-t-0 border-r-0 border-l-0 focus:outline-none"
            type="text"
          />
        </form>

        <ClassicButton style={"w-40"} text={"CONTINUE"} />
      </div>
    </div>
  );
};
const OpenPanel4 = () => {
  return <div className="w-full min-h-20 bg-white p-5">Panel 4</div>;
};
const OpenPanel5 = () => {
  return <div className="w-full min-h-20 bg-white p-5">Panel 5</div>;
};
const OpenPanel6 = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const handleToggle = () => {
    setPanelOpen(() => !panelOpen);
  };

  return (
    <div className=" w-full flex flex-col bg-blue-100 p-5 space-y-3">
      <div className="w-full flex items-center  space-x-3">
        <Radio
          checked={true}
          value="f"
          name="radio-buttons"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <div className="">
          <p className="text-sm">EMI (Easy Installments)</p>
        </div>
      </div>
      <div className="flex items-center text-sm space-x-2">
        <p className="text-sm ml-20">
          Pay in easy monthly installments from any of the options below.{" "}
        </p>
        <p className="flipkart-blue font-medium">Terms and Conditions</p>
      </div>
      <div
        onClick={handleToggle}
        className="flex items-center space-x-3 ml-20 bg-gray-200 border border-gray-400 w-3/4 p-4 rounded-sm cursor-pointer"
      >
        {panelOpen ? (
          <Icon icon="ph:minus-bold" color="#2f75f0" />
        ) : (
          <Icon icon="ic:outline-plus" color="#2f75f0" />
        )}
        <Icon icon="carbon:warning-filled" color="#2f75f0" />
        <span className="text-sm">Credit Card EMI </span>
      </div>
      {panelOpen && <div className="text-xl">Various Card OPTIONS</div>}
    </div>
  );
};
const OpenPanel7 = () => {
  return (
    <div className="w-full flex flex-col min-h-20 bg-blue-100 p-5 space-x-3">
      <div className="flex items-center space-x-3 ">
        {" "}
        <Radio
          checked={true}
          value="g"
          name="radio-buttons"
          slotProps={{ input: { "aria-label": "A" } }}
        />
        <div className="">
          <p className="text-sm">Cash on Delivery</p>
        </div>
      </div>
      <div className="w-full flex items-center min-h-20  p-5 space-x-3 ">
        {" "}
        <div className="flex items-center space-x-2 border bg-white rounded p-3">
          <img src={capchaLink} className="w-36" alt="" />
          <Icon
            icon="pajamas:retry"
            color="#2f75f0"
            fontSize={20}
            className="cursor-pointer"
          />
        </div>
        <ClassicInput placeholder="Enter the Characters" />
        <ClassicButton text={"PLACE ORDER"} />
      </div>
    </div>
  );
};

export default PaymentOptions;
