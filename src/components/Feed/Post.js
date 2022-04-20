import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import "./Post.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TextField from "@mui/material/TextField";


function Post({
  displayName,
  text,
  onDelete,
  id,
  onUpdate,
  widget,
  tweets,
  isTweetUpdated,
  newUpdatedTweet,
  feed,
}) {
  const [editable, setEditable] = useState(false);
  const [editText, setEditText] = useState("");
  const [updated, setUpdated] = useState(false);
  const deleteHandler = () => {
    setEditable(false);
    onDelete(id);
  };

  const inputEditHandler = (e) => {
    setEditText(e.target.value);
  };

  const editHandler = () => {
    setEditable(!editable);
  };

  const handleEditSubmit = () => {
    // console.log("click");

    onUpdate(id, editText);
    setUpdated(true);
    setEditable(!editable);
  };

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/1348689209469534209/6OuN3BwE_400x400.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {displayName.split(" ")[0].toLowerCase()}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p className={editable ? "onfocus" : ""} spellCheck={false}>
              {feed &&
                (editable ? (
                  <TextField
                    multiline
                    margin="none"
                    autoFocus
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      style: {
                        fontSize : 15
                      }
                    }}
                    className="editInputBox"
                    type="text"
                    onChange={inputEditHandler}
                    onFocus={inputEditHandler}
                    defaultValue={updated ? editText : text}
                  />
                ) : updated ? (
                  editText
                ) : (
                  text
                ))}
              {widget && (isTweetUpdated ? newUpdatedTweet : text)}
            </p>
          </div>
        </div>
        {!widget && (
          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <div onClick={editHandler}>
              {!editable && <EditIcon fontSize="small" />}
              {editable && (
                <CheckCircleIcon
                  className="circleCheck"
                  fontSize="small"
                  onClick={handleEditSubmit}
                />
              )}
            </div>
            <FavoriteBorderIcon fontSize="small" />
            <div onClick={deleteHandler}>
              <DeleteIcon fontSize="small" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
