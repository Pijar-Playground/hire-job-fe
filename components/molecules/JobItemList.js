/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/pages/jobStyle.module.scss";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

function JobItemList({ item }) {
  return (
    <React.Fragment>
      <DesktopView item={item} />

      <MobileView item={item} />
    </React.Fragment>
  );
}

function DesktopView({ item }) {
  return (
    <div className="desktop-view">
      <div class="row py-4 align-items-center">
        <div class="col-md-1">
          <img src={item?.image} alt="profile" className={style.profileImage} />
        </div>
        <div class={`col-md-9 ${style.profileContent}`}>
          <h2>{item?.name}</h2>
          <p>{item?.job}</p>

          <div className="d-flex align-items-center gap-2">
            <GrLocation style={{ color: "#9ea0a5" }} />
            <p>{item?.location}</p>
          </div>

          <div className="d-flex align-items-center gap-2 mt-2">
            {item?.skills?.slice(0, 3).map((_item) => (
              <span
                class={`badge bg-secondary ${style.skillBadge}`}
                key={_item}
              >
                {_item}
              </span>
            ))}

            {item?.skills?.slice(3, item?.skills?.length)?.length ? (
              <span class={`badge bg-secondary ${style.skillBadge}`}>
                +{item?.skills?.slice(3, item?.skills?.length)?.length}
              </span>
            ) : null}
          </div>
        </div>
        <div class="col-md-2">
          <Link href={`/jobs/detail/${item?.slug}`}>
            <button
              type="button"
              class={`btn btn-primary btn-lg ${style.profileBtn}`}
            >
              Lihat Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileView({ item }) {
  return (
    <div className="mobile-view">
      <div class="row p-3 align-items-center ">
        <div class="col-12">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={item?.image}
              alt="profile"
              className={style.profileImage}
            />
          </div>
        </div>
        <div class={`col-12 ${style.profileContent}`}>
          <h2 className="text-center">{item?.name}</h2>
          <p className="text-center">{item?.job}</p>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <GrLocation style={{ color: "#9ea0a5" }} />
            <p>{item?.location}</p>
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2 my-2">
            {item?.skills?.slice(0, 3).map((_item) => (
              <span
                class={`badge bg-secondary ${style.skillBadge}`}
                key={_item}
              >
                {_item}
              </span>
            ))}

            {item?.skills?.slice(3, item?.skills?.length)?.length ? (
              <span class={`badge bg-secondary ${style.skillBadge}`}>
                +{item?.skills?.slice(3, item?.skills?.length)?.length}
              </span>
            ) : null}
          </div>
        </div>
        <div class="col-md-12">
          <div className="d-flex justify-content-center">
            <Link href={`/jobs/detail/${item?.slug}`}>
              <button
                type="button"
                class={`btn btn-primary btn-lg ${style.profileBtn}`}
              >
                Lihat Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItemList;
