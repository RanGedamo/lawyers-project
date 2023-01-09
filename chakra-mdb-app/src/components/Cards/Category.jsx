import react, { useState, useEffect } from "react";
import { MDBContainer } from 'mdb-react-ui-kit';
import {CategoryArr} from "../../sidder"

export default function Category() {
  const [categories,setCategories] = useState([])
  useEffect(() => {setCategories(CategoryArr)}, [])
  
  console.log(categories)
  return (
    <MDBContainer breakpoint="sm"  className="d-flex justify-content-center mt-3">
    <div className="row w-75">
      {categories ? (
        categories.map(category => (
          <div key={category._id} className="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="bg-image rounded-6">
              <img
                src={category.categoryImg}
                className="w-100 h-100"
                alt="category-image"
              />
              <div className="mask" style={{
              background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 50%, hsla(0.8, 0%, 0%, 0.8))',
            }}>
                <div className="bottom-0 d-flex align-items-end h-100 text-center justify-content-center">
                  <div>
                    <h2 className="fw-bold text-white mb-4">
                      {category.categoryName}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          There has been a problem
        </div>
      )}
    </div>
    </MDBContainer>
  );
};