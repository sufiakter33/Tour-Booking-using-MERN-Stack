import { Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tour/search/getFeaturedTours`);

  return (
    <>
      {loading && <h4>Loading . . . .</h4>}
      {error && <h4>{error}</h4>}

      {!loading &&
        !error &&
        featuredTours?.tours?.map((tour) => (
          <Col lg="3" md="4" sm="12" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
