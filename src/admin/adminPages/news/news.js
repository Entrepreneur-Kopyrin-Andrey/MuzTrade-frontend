import React from "react";
import NewsCardAdmin from "../../adminComponents/newsCardAdmin";
import { NewsData } from "../../newsCard";
import search from "../../../assets/search.svg";
import del from "../../../assets/delete.svg";
import {Link} from "react-router-dom"
import Menu from './../../adminComponents/menu';

const News = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const clean = () => {
    setSearchValue("");
  };
  return (
    <>
      <div className="wrapperNewsAdmin">
        <div className="menu">
          <Menu />
        </div>
        <div className="wrapperNews">
          <div className="serach_wrap">
            <div className="serach_container">
              <div className="searchBar">
                <img
                  src={search}
                  alt="search"
                  width={10}
                  height={10}
                  className="bar"
                />

                {searchValue && (
                  <img
                    src={del}
                    alt="clean"
                    width={10}
                    height={10}
                    className="del"
                    onClick={clean}
                  />
                )}

                <input
                  placeholder="Название новости"
                  onChange={onChangeSearchInput}
                  value={searchValue}
                />
              </div>
            </div>

            <div className="create">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9062 1L13.0951 25"
                  stroke="#121212"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12.9053L25 13.0942"
                  stroke="#121212"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <Link to={"/createnews"}>
              <p> Создать новость </p>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="test">
              {NewsData.filter((obj) =>
                obj.summary.toLowerCase().includes(searchValue.toLowerCase())
              ).map((obj) => (
                <NewsCardAdmin
                  image={obj.image}
                  date={obj.date}
                  summary={obj.summary}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { News };
