import React from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

function DetailProfile(props) {
  const { profile } = props;
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  return (
    <>
      <Head>
        <title>{slug} | Hire Jobs</title>
      </Head>
      <main>
        <div class="card" style={{ width: "18rem" }}>
          <img src={profile?.image} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{profile?.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { slug },
  } = context;
  const jobList = await axios.get(
    `${process.env.NEXT_PUBLIC_WEBSITE}/api/job-list`
  );
  const convertData = jobList.data?.find((res) => res.slug === slug);

  return {
    props: {
      profile: convertData,
    }, // will be passed to the page component as props
  };
}

export default DetailProfile;
