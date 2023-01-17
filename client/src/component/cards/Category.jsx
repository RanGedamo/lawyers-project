import { MDBCol, MDBRipple, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { getCategory } from "../../services/categoryService";
import "./Category.css";
import Cookies from "js-cookie";

export default function Category({ categories }) {
  // const [category, setCategory] = useState();
  // useEffect(() => {
  //   getCategory().then((res) => setCategory(res));
  // }, []);
  const subcategories = categories?.subCategory;
  console.log(subcategories);
  const navigate=useNavigate()
  const navigateTo=(dd)=>{
    navigate(dd)
      }
  const popup=()=>{
    document.getElementById("caro").innerHTML=`<div class="w-50 alert alert-danger" role="alert">
    Sing in or Sing up for more information!
  </div>`
    setTimeout(()=>{
      document.getElementById("caro").innerText=""

    },2000)
  }
  return (
    <>
            <span id="caro" className="d-flex justify-content-center align-items-center"></span>

    <MDBRow className=" row-cols-md-3 row-cols-lg-8 row-cols-sm-2">
      {categories ? (
        categories?.map((category, i) => {
          return (
            <MDBCol size={12} key={i} className="mt-3">
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded-8"
                rippleTag="div"
                rippleColor="light"
              >
                <img
                  src={category?.categoryImg}
                  className="w-100 imagecsscategory"
                />
                <div onClick={Cookies.get("user")?()=>navigateTo(`/category/${category?._id}`):popup}>
                  <div
                    className="mask "
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.8)" }}
                  >
                    <p className="lead mb-0 text-dark fw-bolder">
                      {category?.name}
                    </p>
                    <br />
                    <p className="lead mb-0 text-dark fw-bolder">
                      {category?.subCategory?.map((subCategory) => (
                        <subCategory subCategory={subCategory} />
                      ))}
                    </p>
                  </div>
                </div>
              </MDBRipple>
            </MDBCol>
          );
        })
      ) : (
        <MDBCol>no data found</MDBCol>
      )}
    </MDBRow>
    </>
  );
}