/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";
import style from "../../styles/pages/jobStyle.module.scss";
import Head from "next/head";
import JobItemList from "../../components/molecules/JobItemList";
import { getCookie } from "cookies-next";
import { useSelector, useDispatch } from "react-redux";
import * as counter from "../../store/reducer/counter";

function Index(props) {
  const {
    jobList: {
      data: { rows, count },
    },
  } = props;

  const [data, setData] = React.useState(rows);

  // DISPATCH
  // const distpatch = useDispatch();
  // // SELECT
  // const store = useSelector((state) => state);
  // const [data, setData] = React.useState(0);

  // React.useEffect(() => {
  //   // setData(data + 1);
  //   // distpatch(counter.increment());
  // }, []);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(Math.ceil(count / 10));
  const [skillsEntered, setSkillsEntered] = React.useState([]);
  const [skillsValue, setSkillsValue] = React.useState("");

  const getDataByPage = async (_page) => {
    const jobList = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=${_page}&order=ASC`
    );
    const convertData = jobList.data;
    setData(convertData.data.rows);
  };

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
        <div class="mb-3 container">
          <div className="d-flex align-items-center gap-2 my-2">
            {skillsEntered.map((_item) => (
              <button class="btn btn-primary" key={_item}>
                {_item}
                <span
                  class={`badge bg-secondary`}
                  style={{ display: "inline-block", marginLeft: "20px" }}
                  onClick={() => {
                    let newSkills = skillsEntered.filter(
                      (res) => res !== _item
                    );
                    setSkillsEntered(newSkills);
                  }}
                >
                  x
                </span>
              </button>
            ))}
          </div>
          <input
            class="form-control"
            placeholder="Enter your skills"
            onChange={(e) => setSkillsValue(e.target.value)}
            value={skillsValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSkillsEntered([...skillsEntered, ...[skillsValue]]);
                setSkillsValue("");
              }
            }}
          />
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
                    skills: item?.skills,
                    slug: item?.id,
                  }}
                />
                <hr />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="container d-flex justify-content-center">
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                onClick={() => {
                  if (page > 1) {
                    getDataByPage(page - 1);
                    setPage(page - 1);
                  }
                }}
              >
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              {[...new Array(total)].map((item, key) => {
                let currentPage = ++key;
                return (
                  <li
                    class={`page-item ${page === currentPage ? "active" : ""}`}
                    key={currentPage}
                    onClick={() => {
                      getDataByPage(currentPage);
                      setPage(currentPage);
                    }}
                  >
                    <a class="page-link" href="#">
                      {currentPage}
                    </a>
                  </li>
                );
              })}
              <li
                class="page-item"
                onClick={() => {
                  if (page < total) {
                    getDataByPage(page + 1);
                    setPage(page + 1);
                  }
                }}
              >
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1&order=ASC`
  );
  const convertData = jobList.data;

  return {
    props: {
      jobList: convertData,
    }, // will be passed to the page component as props
    revalidate: 30, // In seconds
  };
}

// export async function getServerSideProps() {
//   const jobList = await axios.get(
//     `${process.env.NEXT_PUBLIC_API_URL}/v1/user/list?limit=10&page=1`
//   );
//   const convertData = jobList.data;

//   return {
//     props: {
//       jobList: convertData,
//     }, // will be passed to the page component as props
//   };
// }

export default Index;
