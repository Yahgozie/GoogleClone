import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../components/StateProvider";
import Response from "../components/response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import useGoogleSearch from "../components/useGoogleSearch";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //Live API Call
  const { data } = useGoogleSearch(term);

  //Mock API Call
  //const data = Response;

  console.log(data);

  return (
    <div className="seaarchPage">
      <div className="searchPage_header">
        <h1>{term}</h1>
      </div>
      <div className="searchPage_results"></div>
    </div>
  );
}

export default SearchPage;
