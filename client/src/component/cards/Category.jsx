import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Category({ categories }) {
  return (
    <MDBRow>
      {categories ? (
        categories.map((category) => {
          return (
            <MDBCol size={4} key={category._id}>
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded"
                rippleTag="div"
                rippleColor="light"
              >
                <img src={category.categoryImg} className="h-25" />
                <Link to={`/category/${category._id}`}>
                  <div
                    className="mask "
                    style={{ backgroundImage: `${category.categoryImg}` }}
                  >
                    <MDBRow className="text-center flex-column mt-5 pt-5">
                      <MDBCol>
                        <MDBTypography className="mb-0 mt-5 pt-5 fw-bold">
                          {category.categoryName}
                        </MDBTypography>
                      </MDBCol>
                    </MDBRow>
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
