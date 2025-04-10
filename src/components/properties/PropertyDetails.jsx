import AllDetails from "./AllDetails";
import Overview from "./Overview";
import SimilarListing from "./SimilarListing";

export default function PropertyDetails() {
  return (
    <div>
      <Overview />
      <AllDetails />

      {/* Similar Listing */}
      <SimilarListing />
    </div>
  );
}
