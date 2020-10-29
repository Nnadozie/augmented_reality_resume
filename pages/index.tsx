import React from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";

const index = () => {
  return (
    <>
      <h1>Hello, I'm Dozie!</h1>
      <p>Lorem ipsum</p>
      <p>
        Find me on <a href="https://www.linkedin.com/in/nnadozie-okeke">LN </a>
        <a href="https://github.com/Nnadozie">GH </a>
        <a href="https://twitter.com/dozieokk">TW </a>
        <a>mail</a>
      </p>
      <p>
        View my
        <Link href="/cv">
          <a> cv in augmented reality </a>
        </Link>
        and <a href="">download in pdf format</a>
      </p>
      <p>
        Still here?
        <Link href="/blog">
          <a> Check out my latest tech articles.</a>
        </Link>
      </p>
    </>
  );
};

export default index;
