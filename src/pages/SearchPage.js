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
    // <div className="seaarchPage">
    //   <div className="searchPage_header">
    //     <h1>{term}</h1>
    //   </div>
    //   <div className="searchPage_results"></div>
    // </div>

    <div className="searchPage">
    <div className="searchPage_header">
      <Link to="/">
        <img
          className="searchPage_logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="search_logo"
        />
      </Link>
      <div className="searchPage_headerBody">
        <Search hideButtons />
        <div className="searchPage_options">
          <div className="searchPage_optionsLeft">
            <div className="searchPage_option">
              <SearchIcon className="text" />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage_option">
              <RoomIcon />
              <Link to="/Maps">Maps</Link>
            </div>
            <div className="searchPage_option">
              <ListAltIcon />
              <Link to="/News">News</Link>
            </div>
            <div className="searchPage_option">
              <ImageIcon />
              <Link to="/Images">Images</Link>
            </div>
            <div className="searchPage_option">
              <YouTubeIcon />
              <Link to="/Videos">Videos</Link>
            </div>
            <div className="searchPage_option">
              <MoreVertIcon />
              <Link to="/More">More</Link>
            </div>
          </div>
          <div className="searchPage_optionsRight">
            <div className="searchPage_option">
              <Button to="/Tools" className="searchPage_Tools">
                <Link to="/Tools">Tools</Link>
              </Button>
            </div>
            <div className="searchPage_option">
              <Link to="/Settings">Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {term && (
      <div className="searchPage_results">
        <p className="searchPage_resultCount">
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime} seconds)
        </p>
        {data?.items.map(item => (
          <div className="searchPage_result">
          <a className="searchPage_resultLink" href={item.link}>
          {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
            <img className="searchPage_resultImage" src={ item.pagemap?.cse_image[0]?.src}  alt="" />
          )}
          {item.displayLink}</a>
            <a className="searchPage_resultTitle" href={item.link}><h2>{item.title}</h2></a>
            <p className="searchPage_resultSnippet">{item.snippet}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}

export default SearchPage;
