/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import style from "../../styles/pages/jobStyle.module.scss";
import Head from "next/head";
import JobItemList from "../../components/molecules/JobItemList";
import { getCookie } from "cookies-next";

function Index(props) {
  const {
    jobList: {
      data: { rows, count },
    },
  } = props;

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
            {rows?.map((item, key) => (
              <React.Fragment key={key}>
                <JobItemList
                  item={{
                    image: item?.["user.photo_profile"],
                    name: item?.["user.fullname"],
                    job: item?.job,
                    location: item?.domicile,
                    slills: item?.slills,
                    slug: item?.id,
                  }}
                />
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
  );
  const convertData = jobList.data;

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
  };
}

export default Index;
