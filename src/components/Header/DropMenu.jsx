import { Link } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../responsive";
import { useParams } from "react-router";

const LeftMenu = styled.div`
  padding: 0px;
  font-size: 11px;
  border: none;
  cursor: pointer;
  ${media({ display: "none" })}
`;
const DropDown = styled.div`
  position: absoulte;
  display: inline-block;
  &:hover .dropdown-content {
    display: block;
  }
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  left: 0rem;
  top: 4.4rem;
  min-width: 100%;
  height: 120px;
  box-shadow: 0px 1rem 0.3rem -1rem rgba(0, 0, 0, 0.1);
  transition: all 10s ease-in-out;
  ${media({ display: "inline", marginTop: "-30px", boxShadow: "none" })}
`;
const GridContainer = styled.div`
  width: 60%;
  margin-left: 60px;
  text-align: start;
  ${media({ width: "100%", margin: "30px" })}
`;

const DownContentLink = styled(Link)`
  color: black;
  font-weight: 400;
  text-transform: uppercase;
  grid-template-columns: 65px 140px 1fr;
  padding: 0.15rem 0rem;
  text-align: start;
  text-decoration: none;
  display: inline-grid;
  ${media({
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem"
  })}
`;
const LineDiv = styled.div`
  transform: translate(0px, 15px);
  width: 60px;
  border-bottom: 3px solid black;
  ${media({ display: "none" })}
`;
const DropMenu = () => {
  const { id } = useParams();
  console.log(id);
  // const [cats, setCats] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       setError(null);
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://pvpvpvpvp.gonetis.com:8080/sample/products?kind=${id}`
  //       );
  //       console.log("데이터", response.data.products);
  //       setProduct(response.data.products);
  //     } catch (error) {
  //       setError(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchUsers();
  // }, []);

  // if (!products) return null;

  return (
    <DropDown>
      <LeftMenu>COLLECTION</LeftMenu>
      <DropDownContent className="dropdown-content">
        <GridContainer>
          <LineDiv></LineDiv>
          <DownContentLink
            style={{ marginTop: "30px" }}
            to={`/products?kind=아우터`}
          >
            Outer
          </DownContentLink>
          <DownContentLink to="/">Top</DownContentLink>
          <DownContentLink to="/">Pants</DownContentLink>
          <DownContentLink to="/">Acc</DownContentLink>
          <DownContentLink to="/">Shirts</DownContentLink>
          <DownContentLink to="/">Life</DownContentLink>
          <DownContentLink to="/">Sale</DownContentLink>
        </GridContainer>
      </DropDownContent>
    </DropDown>
  );
};

export default DropMenu;
