"use client"
import React, { useEffect, useState } from 'react';

const CommentBox = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<string[]>([]);

    useEffect(() => {
        const commentStore = localStorage.getItem("comments");
        if (commentStore) {
            setComments(JSON.parse(commentStore));
        }
    }, []);

    const addComment = () => {
        if (comment.trim() !== "") {
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            setComment(""); // Clear the input field
            localStorage.setItem("comments", JSON.stringify(updatedComments)); // Store updated comments in localStorage
        }
    };

    const deleteComment = (index: number) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments); // Update the state to reflect the deletion
        localStorage.setItem("comments", JSON.stringify(updatedComments)); // Update localStorage
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">Leave Your Comment</h1>
            
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write a review"
                    className="w-full md:w-2/3 px-4 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                />
            </div>

            <div className="flex justify-center mb-6">
                <button
                    onClick={addComment}
                    className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition duration-300"
                >
                    Add Comment
                </button>
            </div>

            <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Comments</h2>
            <div className="space-y-4">
                {comments.length === 0 ? (
                    <p className="text-gray-500 text-center">No comments yet. Be the first to add one!</p>
                ) : (
                    comments.map((data, index) => (
                        <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">
                            <p className="text-gray-800 text-lg">{data}</p>
                            <button
                                onClick={() => deleteComment(index)}
                                className="text-red-500 hover:text-red-700 transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CommentBox;
