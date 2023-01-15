import {
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategory } from "../../services/categoryService";
import { useState } from "react";

export default function Categories({ categories }) {
  const [category, setCategory] = useState();
  useEffect(() => {
    getCategory().then((res) => setCategory(res));
  }, []);
  // console.log(category);

  return (
    <MDBRow>
      {categories ? (
        categories.map((category, index) => {
          return (
            <MDBCol size={12} className="col-md-4">
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded"
                rippleTag="div"
                rippleColor="light"
              >
                {console.log(category)}
                <img src={category.categoryImg} className="w-100" />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                  >
                    {category.categoryName}
                  </div>
                </a>
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
