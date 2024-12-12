'use client'

import { useState } from "react"
import TimelineDataDummy from "../dummies/TimelineDummies"

const usePost = () => {
  const [timelineData, setTimelineData] = useState(TimelineDataDummy);
  const [postContent, setPostContent] = useState('');
  const [showPostModal, setShowPostModal] = useState(false);

  const handleContentOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setPostContent(value);
  }

  const handleModal = () => {
    setShowPostModal(!showPostModal);
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
  }

  return {
    timelineData,
    postContent,
    showPostModal,
    handlePostData,
    handleContentOnChange,
    handleModal
  }
};

export default usePost;