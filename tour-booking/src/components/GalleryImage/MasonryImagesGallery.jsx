import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./GalleryImage";

const MasonryImagesGallery = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1rem">
          {galleryImages.map((item, index) => (
            <img
              className="masonry-img"
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default MasonryImagesGallery;
