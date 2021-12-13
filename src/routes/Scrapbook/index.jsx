import React, { useState } from "react";
import "./index.scss";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

import Icon from "../../components/Icon";
import LoadingOverlay from "../../components/LoadingOverlay";

import youFood from "../../assets/images/pictures/you-1.jpeg";
import youFood2 from "../../assets/images/pictures/you-5.jpeg";
import youFood3 from "../../assets/images/pictures/you-13.jpeg";
import youFood4 from "../../assets/images/pictures/you-12.jpeg";
import youFood5 from "../../assets/images/pictures/you-15.jpeg";
import youFood6 from "../../assets/images/pictures/you-16.jpeg";
import youFood7 from "../../assets/images/pictures/you-17.jpeg";

import youTravel1 from "../../assets/images/pictures/you-2.jpeg";
import youTravel2 from "../../assets/images/pictures/you-3.jpeg";
import youTravel3 from "../../assets/images/pictures/you-14.jpeg";
import youTravel4 from "../../assets/images/pictures/you-10.jpeg";
import youTravel5 from "../../assets/images/pictures/you-18.jpeg";
import youTravel6 from "../../assets/images/pictures/you-19.jpeg";
import youTravel7 from "../../assets/images/pictures/you-20.jpeg";

import you1 from "../../assets/images/pictures/you-4.jpeg";
import you2 from "../../assets/images/pictures/you-7.jpeg";

import you4 from "../../assets/images/pictures/you-9.jpeg";

import sushi from "../../assets/images/sushi.png";
import aircraft from "../../assets/images/aircraft.png";

import Partition from "./units/Partition";
import PartitionRow from "./units/PartitionRow";

const Scrapbook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleOpenLetter = async () => {
    setIsLoading(true);
    await MySwal.fire({
      title: <strong>Before that..</strong>,
      html: (
        <div className="flex flex-column">
          <i>
            Please remember that I do this becuase I care about you so much, no
            one in my life has affeted my emotion stronger than you.
          </i>
          <br />
          <i>Do you wish to continue?</i>
        </div>
      ),
      icon: "warning",
      confirmButtonText: "Yes",
      showCancelButton: true,
      cancelButtonText: "No, I'm not ready.",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "POST",
          url: "https://formspree.io/f/xknynrpe",
          data: {
            msg: "Is confirmed to read letter",
          },
        })
          .then((res) => {
            setIsLoading(false);
            navigate("/letter");
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      } else {
        axios({
          method: "POST",
          url: "https://formspree.io/f/xknynrpe",
          data: {
            msg: result.dismiss,
          },
        })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="flex flex-row justify-between">
      <LoadingOverlay state={isLoading} />
      <Partition>
        <PartitionRow></PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <div className="flex flex-row-reverse">
            <h1 className="bt bw2 ma0">Food</h1>
          </div>
        </PartitionRow>
        <PartitionRow />
        <PartitionRow>
          <div className="flex flex-row-reverse">
            <h1 className="bt bw2 ma0">Travel</h1>
          </div>
        </PartitionRow>
        <PartitionRow />

        <PartitionRow>
          <div className="flex flex-row-reverse">
            <h1 className="bt bw2 ma0 tr">Your moments</h1>
          </div>
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <img src={youFood} alt="" className="i-contain " />
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 items-end">
            <h1 className="huge-text ma0 f-headline">04</h1>
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={youTravel1} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 justify-center pl3-ns">
            <img src={aircraft} alt="" />
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={you1} alt="" className="i-contain" />
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <img src={youFood2} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <img src={youFood4} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 items-end">
            <h1 className="huge-text ma0 f-headline">16</h1>
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={youTravel4} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow type="text">
          <div className="flex h-100 w-100 ph2-ns">
            <p className="f6-ns tj">
              This moment was a big spark for me. I was hiding from your
              parents, driving alone, and got the best butterfly in the tummies
              I’ve ever had. You were so beautiful, so elegant and I was smiling
              for the whole concert. I was so proud of you.{" "}
            </p>
          </div>
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <img src={youFood3} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <img src={youFood5} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow type="text">
          <div className="flex h-100 w-100 ph2-ns">
            <p className="f7-ns tj">
              Traveling used to be one of our favourite things to plan, and go.
              Bali, Bandung, Jogja and Solo. Fun fact, when I was still in the
              US, I was hoping we could reach the time that you would come and
              visit me. But yea that never happens. Even when just we traveling
              around Jakarta, sitting beside you and knowing that you were the
              only one that I care about in the world, was the greatest moments
              of my life. Thank you for that.
            </p>
          </div>
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 ">
            <img src={youTravel5} alt="" className="i-contain pv1-ns" />
            <img src={youTravel6} alt="" className="i-contain pv1-ns" />
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={you4} alt="" className="i-contain" />
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <div className="flex flex-column-reverse h-100 items-end">
            <h1 className="huge-text ma0 f-headline">12</h1>
          </div>
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 ">
            <img src={youFood6} alt="" className="i-contain pv1-ns" />
            <img src={youFood7} alt="" className="i-contain pv1-ns" />
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={youTravel2} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <div className="flex flex-column h-100 items-end">
            <h1 className="huge-text ma0 f-headline">98</h1>
          </div>
        </PartitionRow>
        <PartitionRow type="text">
          <div className="flex h-100 w-100 ph2-ns">
            <p className="f6-ns tj">
              Me being able to come and celebrate your graduation was one of the
              best time that I can be part of. Back then I had to go to pasar to
              get you the best bouquet of flowers that you will ever get. It was
              so big that you said that mine beat Bunda’s flowers lul. It was
              great.
            </p>
          </div>
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow type="text">
          <div className="flex h-100 w-100 ph2-ns">
            <p className="f7-ns tj">
              Food was one of the medium for us to spend our time together. It
              was our source of happiness, where we could just eat delicious
              food and enjoy each other’s company. The favourites were sushi,
              steak, and especially for you recently, Soto. Thank you for all
              the the food we shared together, because through your company, I
              learnt “sharing is caring”.
            </p>
          </div>
        </PartitionRow>
        <PartitionRow type="text">
          <div className="flex flex-column h-100 justify-center">
            <img src={sushi} alt="" />
          </div>
        </PartitionRow>
        <PartitionRow>
          <img src={youTravel3} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <img src={youTravel7} alt="" className="i-contain" />
        </PartitionRow>
        <PartitionRow>
          <img src={you2} alt="" className="i-contain" />
        </PartitionRow>
      </Partition>
      <Partition>
        <PartitionRow>
          <div className="flex justify-center">
            <div
              className="w-50 flex flex-column justify-center grow pointer"
              onClick={handleOpenLetter}
            >
              <div className="flex justify-center">
                <Icon name="envelope" />
              </div>
              <p className="f7-ns tc bt">Open letter here</p>
            </div>
          </div>
        </PartitionRow>
      </Partition>
    </div>
  );
};

export default Scrapbook;
