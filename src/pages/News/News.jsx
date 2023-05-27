/*eslint-disable*/
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';

import { Link, useLoaderData } from 'react-router-dom';
import EditorsInSight from './EditorsInSight/EditorsInSight';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details, category_id, image_url, author, total_view, rating} = news;
    return (
        <div>
<Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="danger"> <FaArrowLeft/> All News in this Category</Button></Link>
      </Card.Body>
    </Card>
  <EditorsInSight></EditorsInSight>
        </div>
    );
};

export default News;
