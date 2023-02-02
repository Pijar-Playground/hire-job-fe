/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import style from "../../styles/pages/jobStyle.module.scss";
import Head from "next/head";
import JobItemList from "../../components/molecules/JobItemList";
import {  getCookie } from "cookies-next";

function Index(props) {
  const { jobList } = props;

  return (
    <>
      <Head>
        <title>Job List | Hire Jobs</title>

        {/* <style>
          {`
            body {
              background-color: blue !important;
            }
         `}
        </style> */}
      </Head>

      <main>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
        
        <div className="container py-5">
          <div class={`card border-0 shadow ${style.cardStyle}`}>
            {jobList?.map((item, key) => (
              <React.Fragment key={key}>
                <JobItemList item={item} />
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/job-list`
  );
  const convertData = jobList.data;

  const token = getCookie("token", { req, res });

  console.log(token);

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
  };
}

export default Index;
