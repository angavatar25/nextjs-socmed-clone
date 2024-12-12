'use client'

import { useState } from "react"
import TimelineDataDummy from "../dummies/TimelineDummies"
import CommentsDummies from "../dummies/CommentsDummies";

const usePost = () => {
  const [timelineData, setTimelineData] = useState(TimelineDataDummy);
  const [commentData, setCommentData] = useState(CommentsDummies);

  const [postContent, setPostContent] = useState('');
  const [commentContent, setCommentContent] = useState('');

  const [showPostModal, setShowPostModal] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false);

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setPostContent(value);
  };

  const handleCommentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCommentContent(value);
  }

  const handleModal = () => {
    setShowPostModal(!showPostModal);
  };

  const handleCommentModal = () => {
    setShowCommentSection(!showCommentSection);
  }

  const handlePostData = () => {
    const lastId = timelineData[timelineData.length - 1].id;

    const postData = {
      id: lastId + 1,
      postContent,
      totalComments: 0,
      totalLikes: 0,
      location: null,
      userName: 'David Lahore',
      profilePicture: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
    };

    setTimelineData((prev) => [postData, ...prev]);
    setShowPostModal(false);
  };

  const handleCommentData = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const lastId = commentData[commentData.length - 1].id;

    const newData = {
      id: lastId + 1,
      comment: commentContent,
      profileName: 'David Lahore',
      profilePic: 'https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg',
    };

    if (e.key === 'Enter') {    
      setCommentData((prev) => [...prev, newData]);
      setCommentContent('');
      setShowCommentSection(false);
    }
  }

  return {
    timelineData,
    postContent,
    showPostModal,
    showCommentSection,
    commentData,
    commentContent,
    handlePostData,
    handleContentOnChange,
    handleModal,
    handleCommentModal,
    handleCommentData,
    handleCommentOnChange,
  }
};

export default usePost;