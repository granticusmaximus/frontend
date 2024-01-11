import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import { Helmet } from "react-helmet";
import Pagination from "react-sanity-pagination";

const itemsToSend = [];

export default function AllProducts() {
  const postsPerPage = 5;
  const [allProductsData, setAllProducts] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
            title,
            slug,
            author,
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          } | order(publishedAt desc)`
      )

      .then((res) => {
        itemsToSend.push(...res);
      })
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  const action = (page, range, allPostsData) => {
    console.log(page, range, allPostsData);
    setAllPosts(allPostsData);
  };

  return ()