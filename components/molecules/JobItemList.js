/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/pages/jobStyle.module.scss";
import { GrLocation } from "react-icons/gr";
import Link from "next/link";

function JobItemList({ item }) {
  return (
    <React.Fragment>
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
            {item?.slills?.slice(0, 3).map((_item) => (
              <span
                class={`badge bg-secondary ${style.skillBadge}`}
                key={_item}
              >
                {_item}
              </span>
            ))}

            {item?.slills?.slice(3, item?.slills?.length)?.length ? (
              <span class={`badge bg-secondary ${style.skillBadge}`}>
                +{item?.slills?.slice(3, item?.slills?.length)?.length}
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
    </React.Fragment>
  );
}

export default JobItemList;
