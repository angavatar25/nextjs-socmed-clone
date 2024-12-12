'use client'

import { useState } from "react";

import FeedComponent from "./components/FeedComponent";
import PostTimelineComponent from "./components/PostTimelineComponent";
import StoryComponent from "./components/StoryComponent";
import NavComponent from "./components/NavComponent";

import usePost from "./hooks/usePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CommentComponent from "./components/CommentComponent";

const Home = () => {
  const {
    postContent,
    timelineData,
    showPostModal,
    showCommentSection,
    commentData,
    commentContent,
    handleContentOnChange,
    handlePostData,
    handleModal,
    handleCommentModal,
    handleCommentData,
    handleCommentOnChange,
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
      <CommentComponent
        showComments={showCommentSection}
        comments={commentData}
        handleCloseComment={handleCommentModal}
        onChangeComment={handleCommentOnChange}
        onEnterComment={handleCommentData}
        commentVal={commentContent}
      />
      <div className="mb-5">
        <StoryComponent/>
      </div>
      {timelineData.map((timeline) => (
        <FeedComponent
          handleCommentClick={handleCommentModal}
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
