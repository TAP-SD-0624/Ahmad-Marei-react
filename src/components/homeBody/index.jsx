import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar";
import CardsContainer from "../cardsContainer";
import classes from "./styles.module.css";
import classNames from "classnames";
import Loading from "../../shared/LoadingSpinner";

export default function MainContent() {
  const [webTopics, setWebTopics] = useState([]);
  const [filteredWebTopics, setFilteredWebTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [selectedFilterOption, setSelectedFilterOption] = useState("default");
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const fetchWebTopics = async () => {
      try {
        const response = await fetch(
          "https://tap-web-1.herokuapp.com/topics/list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch web topics");
        }
        const data = await response.json();
        setWebTopics(data);
        const categories = Array.from(
          new Set(data.map((topic) => topic.category))
        );

        const options = categories.map((topic) => ({
          value: topic,
          label: topic,
        }));

        setFilterOptions([
          {
            value: "default",
            label: "Default",
          },
          ...options,
        ]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWebTopics();
  }, []);

  useEffect(() => {
    let filteredTopics = webTopics;
    if (searchQuery) {
      filteredTopics = filteredTopics.filter((topic) =>
        topic.topic.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedFilterOption !== "default") {
      filteredTopics = filteredTopics.filter(
        (topic) => topic.category === selectedFilterOption
      );
    }
    if (selectedSortOption === "title") {
      filteredTopics = filteredTopics.sort((a, b) =>
        a.topic.localeCompare(b.topic)
      );
    } else if (selectedSortOption === "author") {
      filteredTopics = filteredTopics.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    setFilteredWebTopics(filteredTopics);
  }, [searchQuery, selectedSortOption, selectedFilterOption, webTopics]);

  return (
    <div class={classNames(classes.mainContainer)}>
      {/* <Loading open={loading} /> */}
      <div className="container">
        <SearchBar
          webTopics={webTopics}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSortOption={selectedSortOption}
          setSelectedSortOption={setSelectedSortOption}
          selectedFilterOption={selectedFilterOption}
          setSelectedFilterOption={setSelectedFilterOption}
          filterOptions={filterOptions}
        />
        <p class={classes.numOfCards}>
          "{filteredWebTopics.length}" Web Topics Found
        </p>
        <CardsContainer webTopics={filteredWebTopics} />
      </div>
    </div>
  );
}
