import React, { useContext } from "react";
import { Card, Image, Button, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import LikeButton from "./LikeButton";
import { AuthContext } from "../contexts/auth";

const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { id, username, createdAt, body, commentCount } = post;
  return (
    <Card className="post-card">
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={post} />
        <Button as="div" labelPosition="right">
          <Button as={Link} to={`/posts/${id}`} icon basic>
            <Icon name="comments" />
          </Button>
          <Label as="a" basic pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && (
          <Button icon style={{ margin: 0, float: "right" }}>
            <Icon name="trash" />
          </Button>
        )}
      </Card.Content>
    </Card>
  );
};

export default PostCard;
