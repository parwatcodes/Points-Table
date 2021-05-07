import React from "react";
import "./index.css";
import IResponse from "./data.interface";
import chickenImage from "../images/c.png";
import pImage from "../images/PngItem_1219702.png";
import vivoImage from "../images/vivo.jpg";

interface IPoints {
  data: IResponse[];
}

const Points = (props: IPoints) => {

  return (
    <div className="container">
      <div className="innerContainer">
        <div style={{
          position: "absolute",
          marginTop: "-58px",
          marginLeft: "389px"
        }}>
          <img style={{
            height: "125px"
          }} src={pImage} />
        </div>
        <div style={{
          position: "absolute",
          marginTop: "6px",
          marginLeft: "764px"
        }}>
          <img style={{
            height: "50px",
            borderRadius: "5px"
          }} src={vivoImage} />
        </div>
        <div className="overall">OVERALL STANDINGS</div>
        <table style={{
          borderCollapse: "collapse"
        }}>
          <tr className="tablehead">
            <th className="otherhead"># RANK</th>
            <th className="teamhead">TEAM</th>
            <th className="otherhead">PLACE PTS</th>
            <th className="otherhead">KILL PTS</th>
            <th className="otherhead">TOTAL PTS</th>
            <th className="otherhead">WWCD</th>
          </tr>
          {props.data.sort((x, y) => {

            if (y.totalpoints === x.totalpoints) {
              console.log("==", y.totalpoints)
              return y.killpoints - x.killpoints;
             } else {
               return y.totalpoints - x.totalpoints
             }

          }).map((d, i) => {
            return (<tr className="tablehead">
              <td className="otherhead" style={{
                color: "black"
              }}>{i + 1}</td>
              <td className="otherhead" style={{
                backgroundColor: "rgb(232 196 75)",
                color: "black"
              }}>{d.team}</td>
              <td className="otherhead" style={{
                backgroundColor: "rgb(138 119 56)"
              }}>{d.placementpoints}</td>
              <td className="otherhead" style={{
                backgroundColor: "rgb(138 119 56)"
              }}>{d.killpoints}</td>
              <td className="otherhead" style={{
                color: "black",
                backgroundColor: "rgb(138 119 56)"
              }}>{d.totalpoints}</td>
              <td className="otherheadwwcd" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black"
              }}>{d.wwcd > 1 && <> X{d.wwcd} <img className="chickenImage" src={chickenImage} /></>} </td>
            </tr>);
          })}
        </table>
      </div>
    </div>
  );
};

export default Points;
