import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../../services/categoryService";

export default function Category({categories}) {
  // const [category, setCategory] = useState();
  // useEffect(() => {
  //   getCategory().then((res) => setCategory(res));
  // }, []);
  return (
    <MDBRow className=" row-cols-md-2 row-cols-lg-3">
      {categories ? (
        
        categories?.map((categories, i) => {
          return (
            <MDBCol size={12} key={i} className="mt-4">
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src={categories.categoryImg}
                  className="w-100"
                />
                <Link to={`/category/${categories._id}`}>                  
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  >
                    <p className="lead mb-0" >{categories.name}</p>
                    <br />
                    <p className="lead mb-0 d-flex " >{categories.description}</p>
                  </div>
                  </Link>
              </MDBRipple>
            </MDBCol>
          );
        })
      ) : (
        <MDBCol>no data found</MDBCol>
      )}
    </MDBRow>
  );
}
