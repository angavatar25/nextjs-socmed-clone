'use client'

import { useState } from "react";

import FeedComponent from "./components/FeedComponent";
import PostTimelineComponent from "./components/PostTimelineComponent";
import StoryComponent from "./components/StoryComponent";
import NavComponent from "./components/NavComponent";

import usePost from "./hooks/usePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const {
    postContent,
    timelineData,
    showPostModal,
    handleContentOnChange,
    handlePostData,
    handleModal,
  } = usePost();

  return (
    <div className="relative">
      <PostTimelineComponent
        content={postContent}
        showModal={showPostModal}
        handleCloseModal={handleModal}
        handleContentOnChange={handleContentOnChange}
        handlePostContent={handlePostData}
      />
      <div className="mb-5">
        <StoryComponent/>
      </div>
      {timelineData.map((timeline) => (
        <FeedComponent
          key={`timeline-${timeline.id}`}
          data={timeline}
        />
      ))}
      <NavComponent
        handleShowPost={handleModal}
      />
    </div>
  )
};

export default Home;
