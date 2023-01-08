import { MDBContainer } from 'mdb-react-ui-kit';

const CategoryArr = [
  {
    categoryName: "Personal Injury",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Automobile Accidents ",
        _id: "63b57ae8bf06bcefd6812e87",
      },
      {
        name: "Dangerous Property/Buildings ",
        _id: "63b57ae8bf06bcefd6812e88",
      },
      {
        name: "Defective Products",
        _id: "63b57ae8bf06bcefd6812e89",
      },
      {
        name: "Medical Malpractice",
        _id: "63b57ae8bf06bcefd6812e8a",
      },
    ],
  },
  {
    _id: "63b57b3abf06bcefd6812e92",
    categoryName: "Employment ",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Disabilities ",
        _id: "63b57b3abf06bcefd6812e93",
      },
      {
        name: "Employment Contracts ",
        _id: "63b57b3abf06bcefd6812e94",
      },
      {
        name: "Employment Discrimination",
        _id: "63b57b3abf06bcefd6812e95",
      },
      {
        name: "Pensions and Benefits",
        _id: "63b57b3abf06bcefd6812e96",
      },
    ],
  },
  {
    _id: "63b57b92bf06bcefd6812e98",
    categoryName: "Real Estate",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Mortgages",
        _id: "63b57b92bf06bcefd6812e99",
      },
      {
        name: "Purchase and Sale of Residence",
        _id: "63b57b92bf06bcefd6812e9a",
      },
      {
        name: "Title and Boundary Disputes",
        _id: "63b57b92bf06bcefd6812e9b",
      },
      {
        name: "Zoning, Planning and Land Use",
        _id: "63b57b92bf06bcefd6812e9c",
      },
    ],
  },
  {
    _id: "63b57bd4bf06bcefd6812e9e",
    categoryName: "Criminal Defense",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Criminal Law",
        _id: "63b57bd4bf06bcefd6812e9f",
      },
      {
        name: "Drug Crimes",
        _id: "63b57bd4bf06bcefd6812ea0",
      },
      {
        name: "White Collar Crime",
        _id: "63b57bd4bf06bcefd6812ea1",
      },
      {
        name: "Misdemeanors",
        _id: "63b57bd4bf06bcefd6812ea2",
      },
    ],
  },
  {
    _id: "63b57de7bf06bcefd6812eaa",
    categoryName: "Government",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Government Discrimination",
        _id: "63b57de7bf06bcefd6812eab",
      },
      {
        name: "Education and Schools",
        _id: "63b57de7bf06bcefd6812eac",
      },
      {
        name: "Social Security - Disability",
        _id: "63b57de7bf06bcefd6812ead",
      },
      {
        name: "Government Agencies/Programs",
        _id: "63b57de7bf06bcefd6812eae",
      },
    ],
  },
  {
    _id: "63b57e28bf06bcefd6812eb0",
    categoryName: "Business",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Breach of Contract",
        _id: "63b57e28bf06bcefd6812eb1",
      },
      {
        name: "Business Disputes",
        _id: "63b57e28bf06bcefd6812eb2",
      },
      {
        name: "Buying and Selling a Business",
        _id: "63b57e28bf06bcefd6812eb3",
      },
      {
        name: "Contract Drafting and Review",
        _id: "63b57e28bf06bcefd6812eb4",
      },
    ],
  },
  {
    _id: "63b57e5ebf06bcefd6812eb6",
    categoryName: "Financial",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Consumer Bankruptcy",
        _id: "63b57e5ebf06bcefd6812eb7",
      },
      {
        name: "Collections",
        _id: "63b57e5ebf06bcefd6812eb8",
      },
      {
        name: "Foreclosures",
        _id: "63b57e5ebf06bcefd6812eb9",
      },
      {
        name: "Consumer Credit",
        _id: "63b57e5ebf06bcefd6812eba",
      },
    ],
  },
  {
    _id: "63b57e95bf06bcefd6812ebc",
    categoryName: "Divorce",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Adoptions",
        _id: "63b57e95bf06bcefd6812ebd",
      },
      {
        name: "Child Custody and Visitation",
        _id: "63b57e95bf06bcefd6812ebe",
      },
      {
        name: "Child Support",
        _id: "63b57e95bf06bcefd6812ebf",
      },
      {
        name: "Guardianship",
        _id: "63b57e95bf06bcefd6812ec0",
      },
    ],
  },
  {
    _id: "63b57f21bf06bcefd6812ec2",
    categoryName: "Wills Probate",
    categoryImg:
      "https://images.pexels.com/photos/220996/pexels-photo-220996.jpeg?auto=compress&cs=tinysrgb&w=1600",
    subCategory: [
      {
        name: "Estate Planning",
        _id: "63b57f21bf06bcefd6812ec3",
      },
      {
        name: "Estate Administration",
        _id: "63b57f21bf06bcefd6812ec4",
      },
      {
        name: "Contested Wills or Probate",
        _id: "63b57f21bf06bcefd6812ec5",
      },
      {
        name: "Drafting Wills and Trusts",
        _id: "63b57f21bf06bcefd6812ec6",
      },
    ],
  },
];

export default function Category() {
  return (
    <MDBContainer breakpoint="sm"  className="d-flex justify-content-center mt-3">
    <div className="row w-75">
      {CategoryArr ? (
        CategoryArr.map((category, i) => (
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-4">
            <div className="bg-image rounded-6">
              <img
                src={category.categoryImg}
                className="w-100 h-100"
                alt="category"
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