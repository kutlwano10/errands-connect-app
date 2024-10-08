"use client";
import Image from "next/image";
import pin from "../../public/pin.png";
import destination from "../../public/location.png";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";

const InputItem = ({ type, place }) => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <div className="bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4">
        <Image className="w-5" src={type} alt="" width="" height="" />
        {/* <input className="bg-transparent w-full outline-none" type='text' placeholder={place}/> */}
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
            placeholder: "Pickup Location",
            isClearable: true,
            className: "w-full",
            components: {
              DropdownIndicator: false,
            },
            styles: {
              control: (provided) => ({
                ...provided,
                backgroundColor:"#00ffff00",
                border: "none",

              }),
            },
          }}
        />
      </div>
    </div>
  );
};

export default InputItem;
