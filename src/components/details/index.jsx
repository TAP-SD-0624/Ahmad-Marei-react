import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import classNames from "classnames";
import Description from "./Description";
import TopicCard from "./TopicCard";
import SubTopics from "./SubTopics";
import { Footer, LoadingSpinner } from "../../shared";
import { useLocation, useParams } from "react-router-dom";

export default function DetailsContent() {
  const { id } = useParams();
  const location = useLocation();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchWebTopics = async () => {
      try {
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch web topics");
        }
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWebTopics();
  }, []);
  return (
    <>
      <LoadingSpinner open={loading} />
      {details && (
        <div className={classes.details}>
          <div className={classes.detailsDescription}>
            <div class={classNames(classes.detailsContainer, "container")}>
              <Description details={details} />
              <TopicCard details={details} />
            </div>
          </div>
          <div
            className={classNames(
              classes.detailsContainer,
              classes.subTopicsContent,
              "container"
            )}
          >
            <SubTopics details={details} />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
