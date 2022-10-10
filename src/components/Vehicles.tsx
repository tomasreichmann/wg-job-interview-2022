import React from "react";

/*
  For Assignment #2
  import vehicles from "../../vehicles.json";
  import getRomanNumerals from "../getRomanNumerals";
  {
    "nation": "czech",
    "type": "lighttank",
    "tier": 1,
    "isPremium": false,
    "shapeUri": "//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz06_kolohousenka/cz06_kolohousenka_icon.svg",
    "name": "Kolohousenka"
  },
*/

const Vehicles = () => {
  return (
    <div className="Vehicles">
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__lighttank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">I</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz06_kolohousenka/cz06_kolohousenka_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Kolohousenka</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__lighttank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">II</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz03_lt_vz35/cz03_lt_vz35_icon.svg"
            />
          </span>
          <span className="Vehicle_name">LT vz. 35</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__lighttank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">III</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz10_lt_vz38/cz10_lt_vz38_icon.svg"
            />
          </span>
          <span className="Vehicle_name">LT vz. 38</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">IV</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz11_v_8_h/cz11_v_8_h_icon.svg"
            />
          </span>
          <span className="Vehicle_name">ST vz. 39</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">V</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz09_t_24/cz09_t_24_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 24</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VI</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz08_t_25/cz08_t_25_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 25</span>
        </div>
      </div>
      <div className="Vehicle Vehicle__premium">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank-prem"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VI</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz01_skoda_t40/cz01_skoda_t40_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 40</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VII</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz05_t34_100/cz05_t34_100_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Konštrukta T-34/100</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VIII</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz07_tvp_46/cz07_tvp_46_icon.svg"
            />
          </span>
          <span className="Vehicle_name">TVP VTU Koncept</span>
        </div>
      </div>
      <div className="Vehicle Vehicle__premium">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank-prem"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VIII</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz13_t_27/cz13_t_27_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 27</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">IX</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz02_tvp_t50/cz02_tvp_t50_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 50</span>
        </div>
      </div>
      <div className="Vehicle">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__mediumtank"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">X</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz04_t50_51/cz04_t50_51_icon.svg"
            />
          </span>
          <span className="Vehicle_name">TVP T 50/51</span>
        </div>
      </div>
      <div className="Vehicle Vehicle__premium">
        <div className="Vehicle_nation">
          <span className="Vehicle_flag Vehicle_flag__czech"></span>
        </div>
        <div className="Vehicle_type">
          <span className="Vehicle_type_icon Vehicle_type_icon__heavytank-prem"></span>
        </div>
        <div className="Vehicle_tier">
          <span className="Vehicle_tier_text">VII</span>
        </div>
        <div className="Vehicle_title">
          <span className="Vehicle_shape">
            <img
              alt=""
              src="//eu-wotp.wgcdn.co/dcont/tankopedia_images/cz15_skoda_t-45_prem/cz15_skoda_t-45_prem_icon.svg"
            />
          </span>
          <span className="Vehicle_name">Škoda T 45</span>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
