import React, { useEffect } from "react";
import { BiFilter } from "@react-icons/all-files/bi/BiFilter";
import { BiDotsVertical } from "@react-icons/all-files/bi/BiDotsVertical";
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";
import { FaEye } from "@react-icons/all-files/fa/FaEye";
import { FaUserTimes } from "@react-icons/all-files/fa/FaUserTimes";
import { FaUserPlus } from "@react-icons/all-files/fa/FaUserPlus";
import "./styles.scss";
import PageTitle from "../../components/elements/PageTitle";
import CardOverview from "../../components/elements/CardOverview";
import { DashboardFilter } from "../../components/elements/DashboardFilter";
import { DashboardContainer } from "../../components/elements/DashboardContainer";
import { useNavigate } from "react-router-dom";
import { getData, openDB } from "../../resources/IndexDB";
import { Pagination } from "../../utils/pagination";

const UsersDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userActionIndex, setUserActionIndex] = React.useState<number>(-1);
  const [data, setData] = React.useState<any>([]);
  const [filter, setFilter] = React.useState<boolean>(false);
  const [pageSize, setPageSize] = React.useState<number>(5);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const DisplayActionPanel = (userIndex: number) => {
    setUserActionIndex((prev) =>
      prev < 0 || prev !== userIndex ? (prev = userIndex) : -1
    );
  };

  useEffect(() => {
    openDB();
    getStoreData();
  }, []);

  const getStoreData = async () => {
    let data: any = await getData();
    setData(data);
  };

  const paginate = (): any[] => {
    let paginateData: any[] = data;
    return paginateData.slice(
      currentPage * pageSize - pageSize,
      currentPage * pageSize
    );
  };

  const nextPage = () => {
    if (currentPage < data.length / pageSize)
      setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1)
      setCurrentPage((prev) => prev - 1);
  };

  return (
    <DashboardContainer
      element={
        <>
          <PageTitle text="Users" />
          <div className="overview-container">
            <div>
              <CardOverview
                color="purple"
                carIiconStyle={{ background: "rgba(250, 215, 250, 0.786)" }}
                text="USERS"
                value="2,453"
              />
            </div>
            <div>
              <CardOverview
                carIiconStyle={{ background: "#e9cefceb" }}
                color="indigo"
                text="ACTIVE USERS"
                value="2,453"
              />
            </div>

            <div>
              <CardOverview
                color="orange"
                carIiconStyle={{ background: "#ffecc9" }}
                text="USERS WITH LOANS"
                value="12,453"
              />
            </div>
            <div>
              <CardOverview
                color="#bc5454"
                carIiconStyle={{ background: "#ffdddd" }}
                text="USERS WITH SAVINGS"
                value="102,453"
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {filter && <DashboardFilter />}
            <div className="table-container">
              <table className="lendsqr-table ">
                <thead
                  onClick={() => setFilter(!filter)}
                  className="table-head"
                >
                  <tr>
                    <th>
                      <div>
                        <p>S/N</p>
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>ORGANIZATION</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>USERNAME</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>EMAIL</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>PHONE NUMBER</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>DATE JOINED</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div>
                        <p>STATUS</p>
                        <BiFilter />
                      </div>
                    </th>
                    <th>
                      <div></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {paginate().map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{currentPage * pageSize - pageSize + (index + 1)}</td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.organization}
                      </td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.username}
                      </td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.email}
                      </td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.phone}
                      </td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.createdAt}
                      </td>
                      <td
                        className={`${
                          index !== pageSize - 1 ? "border-bottom" : ""
                        } `}
                      >
                        {item.status === "inactive" ? (
                          <span
                            style={{ background: "#eaeaea" }}
                            className="status"
                          >
                            Inactive
                          </span>
                        ) : item.status === "pending" ? (
                          <span
                            style={{ background: "#ffecc9", color: "#7c7c00" }}
                            className="status"
                          >
                            Pending
                          </span>
                        ) : item.status === "blacklisted" ? (
                          <span
                            style={{ background: "#ffdddd", color: "red" }}
                            className="status"
                          >
                            Blacklisted
                          </span>
                        ) : (
                          <span
                            style={{ background: "#eaf8ea", color: "#63a202" }}
                            className="status"
                          >
                            Active
                          </span>
                        )}
                      </td>
                      <td
                        className={`${index !== 8 ? "border-bottom" : ""} `}
                        onClick={() => DisplayActionPanel(index)}
                      >
                        <BiDotsVertical />
                        {index === userActionIndex && (
                          <ul className="actions-container">
                            <li
                              onClick={() => navigate(`userdetails/${index+1}`)}
                            >
                              <FaEye />
                              <span>View Details</span>
                            </li>
                            <li
                              onClick={() =>
                                console.log("pressed blacklist user")
                              }
                            >
                              <FaUserTimes />
                              <span>Blacklist User</span>
                            </li>
                            <li
                              onClick={() =>
                                console.log("pressed active users")
                              }
                            >
                              <FaUserPlus />
                              <span>Activate User</span>
                            </li>
                          </ul>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination-container">
              <div className="pagination-left">
                <p>Showing</p>
                <select
                  defaultValue={pageSize}
                  onChange={(event: any) => setPageSize(event.target.value)}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
                <p>out of {data.length}</p>
              </div>

              <div className="pagination-right pagination-control">
                <div onClick={() => prevPage()} className="page-decrement">
                  <FaAngleLeft />
                </div>
                <div className="pages ">
                  {Pagination(data.length, pageSize, 3, currentPage).map(
                    (p: number, idx: number) => (
                      <div
                        key={idx}
                        className={`${currentPage == p ? "active-page" : ""}`}
                        onClick={() => setCurrentPage(p)}
                      >
                        {p}
                      </div>
                    )
                  )}
                </div>
                <div onClick={() => nextPage()} className="page-increment">
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default UsersDashboard;
